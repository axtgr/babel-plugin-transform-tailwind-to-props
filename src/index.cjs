const nodePath = require('node:path')
const parser = require('@babel/parser')
const generate = require('@babel/generator').default
const outmatch = require('outmatch')
const { escapeRegExp } = require('./common.cjs')

function getModifiersStringForRegExp(modifiers) {
  return Object.keys(modifiers)
    .map((key) => escapeRegExp(key))
    .sort((a, b) => b.length - a.length)
    .join('|')
}

function createAttributeParser(targetAttributeName, modifiers, modifierSeparator) {
  const modifierKeysString = getModifiersStringForRegExp(modifiers)

  if (modifierKeysString.length === 0) {
    return function parseAttribute(fullAttributeName) {
      return fullAttributeName === targetAttributeName ? [] : undefined
    }
  }

  targetAttributeName = escapeRegExp(targetAttributeName)
  modifierSeparator = escapeRegExp(modifierSeparator)

  const attributeWithModifiersRegExp = new RegExp(
    `^${targetAttributeName}((?:${modifierSeparator}(?:${modifierKeysString}))*)$`,
  )
  const modifierExtractorRegExp = new RegExp(`${modifierSeparator}(${modifierKeysString})`, 'g')

  return function parseAttribute(fullAttributeName) {
    const match = fullAttributeName.match(attributeWithModifiersRegExp)
    if (!match) return undefined
    const modifiers = []
    if (match[1]) {
      const modifierMatches = match[1].matchAll(modifierExtractorRegExp)
      for (const modifierMatch of modifierMatches) {
        modifiers.push(modifierMatch[1])
      }
    }
    return modifiers
  }
}

function createTokenParser(modifiers, modifierSeparator) {
  const modifierKeysString = getModifiersStringForRegExp(modifiers)

  if (modifierKeysString.length === 0) {
    return function parseToken(fullToken) {
      return { token: fullToken, modifiers: [] }
    }
  }

  modifierSeparator = escapeRegExp(modifierSeparator)

  const tokenWithModifiersRegExp = new RegExp(
    `^((?:(?:${modifierKeysString})${modifierSeparator})*)(.+)$`,
  )
  const modifierExtractorRegExp = new RegExp(`(${modifierKeysString})${modifierSeparator}`, 'g')

  return function parseToken(fullToken) {
    const match = fullToken.match(tokenWithModifiersRegExp)
    if (!match) return { token: undefined, modifiers: [] }
    const token = match[2]
    const modifiers = []
    if (match[1]) {
      const modifierMatches = match[1].matchAll(modifierExtractorRegExp)
      for (const modifierMatch of modifierMatches) {
        modifiers.push(modifierMatch[1])
      }
    }
    return { token, modifiers }
  }
}

function compileKeys(mappings, placeholders) {
  // Static keys are keys without placeholders, e.g. `self-center`.
  // They are checked first via fast Map lookups.
  const staticKeys = new Map()

  // Dynamic keys are keys with placeholders, e.g. `self-<value>-center`.
  // They are compiled to regexps, and checked only if no matching static key is found.
  const dynamicKeys = new Map()

  for (const [key, handler] of Object.entries(mappings)) {
    const prefixEnd = key.indexOf('<')

    if (prefixEnd === -1) {
      staticKeys.set(key, { handler })
      continue
    }

    // In a dynamic key, the static prefix is used as a fast preliminary filter before
    // checking the regexp.
    const prefix = key.slice(0, prefixEnd)

    if (!dynamicKeys.has(prefix)) {
      dynamicKeys.set(prefix, [])
    }

    let pattern = escapeRegExp(key)

    for (const [placeholder, placeholderPattern] of Object.entries(placeholders)) {
      pattern = pattern.replaceAll(placeholder, placeholderPattern)
    }

    const finalPattern = new RegExp(`^${pattern}$`)
    dynamicKeys.get(prefix).push({
      key,
      pattern: finalPattern,
      handler,
    })
  }

  return { staticKeys, dynamicKeys }
}

function matchToken(token, { staticKeys, dynamicKeys }) {
  const staticMatch = staticKeys.get(token)
  if (staticMatch) {
    return { key: token, captures: [], handler: staticMatch.handler }
  }

  for (const [prefix, patterns] of dynamicKeys) {
    if (!token.startsWith(prefix)) continue

    for (const { key, pattern, handler } of patterns) {
      const match = token.match(pattern)
      if (!match) continue
      const captures = match.slice(1)
      return { key, captures, handler }
    }
  }
}

function createAttributeNode(name, value) {
  return {
    type: 'JSXAttribute',
    name: {
      type: 'JSXIdentifier',
      name,
    },
    value: {
      type: 'JSXExpressionContainer',
      expression: value,
    },
  }
}

function propsToExpressions(props) {
  return Object.entries(props).map(([name, value]) => ({
    name,
    value: parser.parseExpression(value),
  }))
}

function createObjectExpression(properties = []) {
  return {
    type: 'ObjectExpression',
    properties,
  }
}

function expressionsToObjectProperties(expressions) {
  return expressions.map(({ name, value }) => ({
    type: 'ObjectProperty',
    key: { type: 'Identifier', name },
    value,
  }))
}

function expressionsToAttributes(expressions) {
  return expressions.map(({ name, value }) => createAttributeNode(name, value))
}

function templateLiteralToTokens(templateLiteral) {
  const tokens = []
  let currentToken = ''

  templateLiteral.quasis.forEach((quasi, index) => {
    const parts = quasi.value.raw.split(' ')

    // Handle the parts before the last one (complete tokens)
    parts.slice(0, -1).forEach((part) => {
      if (part) tokens.push(currentToken + part)
      currentToken = ''
    })

    // Handle the last part
    currentToken += parts[parts.length - 1]

    // If there's an expression after this quasi
    if (index < templateLiteral.expressions.length) {
      const expr = templateLiteral.expressions[index]

      // If the current token is complete (ends with a space in the next quasi)
      if (
        index + 1 < templateLiteral.quasis.length &&
        (templateLiteral.quasis[index + 1].value.raw === '' ||
          templateLiteral.quasis[index + 1].value.raw.startsWith(' '))
      ) {
        const value = generate(expr).code
        tokens.push(`${currentToken}\${${value}}`)
        currentToken = ''
      }
    }
  })

  if (currentToken) {
    tokens.push(currentToken)
  }

  return tokens
}

function getAttributeName(attribute) {
  // When the name contains a colon, it's parsed as a JSXNamespacedName,
  // and we have to serialize it back to get a string.
  if (attribute.name.type === 'JSXNamespacedName') {
    return generate(attribute.name).code
  }
  return attribute.name.name
}

function parseTokensFromAttribute(attribute) {
  if (attribute.value.type === 'StringLiteral') {
    return attribute.value.value.split(' ')
  } else if (
    attribute.value.type === 'JSXExpressionContainer' &&
    attribute.value.expression.type === 'TemplateLiteral'
  ) {
    return templateLiteralToTokens(attribute.value.expression)
  } else {
    return []
  }
}

/**
 * Babel plugin that transforms Tailwind-like class names into React props.
 *
 * @param {Object} options - Configuration options for the plugin
 * @param {boolean} [options.debug=false] - Whether to output debug information during transformation
 * @param {string} [options.attribute="className"] - The JSX attribute that contains the class names to transform
 * @param {Record<string, (values: unknown[]) => Record<string, unknown>>} [options.mappings={}] - Mappings of class names to prop transformations
 * @param {Record<string, string>} [options.placeholders={}] - Patterns for dynamic placeholders in class names
 * @param {Record<string, string | boolean>} [options.modifiers={}] - Configuration for handling modifiers like hover, focus, etc.
 * @param {string} [options.modifierSeparator=":"] - Character used to separate modifiers from class and attribute names
 * @param {string | string[]} [options.include] - Glob patterns for files to include
 * @returns {{ name: 'transform-tailwind-to-props', visitor: any }} A Babel plugin object with a visitor for JSXElement nodes
 */
function transformTailwindToPropsPlugin(options = {}) {
  const {
    attribute: targetAttributeName = 'className',
    mappings = {},
    placeholders = {},
    modifiers = {},
    modifierSeparator = ':',
    debug = false,
    include = './{app,src}/**/*.{js,ts,jsx,tsx}',
  } = options
  const projectRoot = process.cwd()
  const isMatchingPath = outmatch(include)
  const compiledKeys = compileKeys(mappings, placeholders)
  const parseAttribute = createAttributeParser(targetAttributeName, modifiers, modifierSeparator)
  const parseToken = createTokenParser(modifiers, modifierSeparator)

  return {
    name: 'transform-tailwind-to-props',
    visitor: {
      JSXElement(path, state) {
        // Globs in the include option are relative to the project root and can optionally
        // be prefixed with `./`, so we normalize the path and then check both prefixed and
        // non-prefixed cases.
        const relativePath = nodePath
          .relative(projectRoot, state.file.opts.filename)
          .replace(/^\.+[/\\]+/g, '')

        if (!isMatchingPath(relativePath) && !isMatchingPath(`./${relativePath}`)) {
          return
        }

        const openingElement = path.node.openingElement
        const attributes = openingElement.attributes
        const attributesByModifier = new Map()
        let hasBeenModified = false
        ;[...attributes].forEach((attribute) => {
          if (attribute.type !== 'JSXAttribute') return

          const fullAttributeName = getAttributeName(attribute)
          const attributeModifiers = parseAttribute(fullAttributeName)

          if (!attributeModifiers) return

          const newAttributes = []
          const rawTokens = parseTokensFromAttribute(attribute)

          rawTokens.forEach((rawToken) => {
            const { token, modifiers: tokenModifiers } = parseToken(rawToken)
            if (!token) return

            const match = matchToken(token, compiledKeys)
            if (!match) return

            const newProps = match.handler(match.captures)
            const expressions = propsToExpressions(newProps)
            const allModifiers = new Set([...attributeModifiers, ...tokenModifiers])

            // Token is converted to object properties when an attribute name
            // is specified for the modifier, and separate attributes otherwise:
            // - c="p-2" → separate attributes
            // - c="hover:p-2" → object properties
            // - c:hover="p-2" → object properties
            // It's unlikely for a token to require both forms, so instead of converting
            // in advance, we do it first time we encounter a corresponding modifier.
            let tokenAsObjectProperties
            let tokenAsAttributes

            // When neither the attribute nor the token have modifiers (e.g. c="p-2"),
            // we add an empty modifier to allow users to specify an attribute name for it.
            if (!allModifiers.size) {
              allModifiers.add('')
            }

            allModifiers.forEach((modifier) => {
              const attributeNameForModifier = modifiers[modifier]
              if (attributeNameForModifier) {
                let attribute
                if (attributesByModifier.has(modifier)) {
                  attribute = attributesByModifier.get(modifier)
                } else {
                  attribute = createAttributeNode(
                    attributeNameForModifier,
                    createObjectExpression(),
                  )
                  attributesByModifier.set(modifier, attribute)
                  newAttributes.push(attribute)
                }
                tokenAsObjectProperties ??= expressionsToObjectProperties(expressions)
                attribute.value.expression.properties.push(...tokenAsObjectProperties)
              } else if (attributeNameForModifier === false) {
                tokenAsAttributes ??= expressionsToAttributes(expressions)
                newAttributes.push(...tokenAsAttributes)
              }
            })
          })

          attributes.splice(attributes.indexOf(attribute), 1, ...newAttributes)
          hasBeenModified = true
        })

        if (debug && hasBeenModified) {
          console.log(`[transform-tailwind-to-props] ${relativePath}`)
          const _attributes = openingElement.attributes
          openingElement.attributes = _attributes.filter(
            (a) => !['__self', '__source'].includes(a.name?.name),
          )
          console.log(generate(openingElement).code)
          console.log()
          openingElement.attributes = _attributes
        }
      },
    },
  }
}

module.exports = transformTailwindToPropsPlugin
