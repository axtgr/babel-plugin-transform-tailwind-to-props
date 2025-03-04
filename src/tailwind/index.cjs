const transformClassNamesPlugin = require('../index.cjs')
const { getOptionsForTailwindConfig } = require('../common.cjs')
const mappings = require('./mappings.cjs')
const placeholders = require('./placeholders.cjs')
const modifiers = require('./modifiers.cjs')

function transformClassNamesPluginTailwind(_api, options = {}) {
  const optionsFromTwConfig = getOptionsForTailwindConfig(options.tailwindConfig, true)
  return transformClassNamesPlugin({
    attribute: 'tw',
    ...optionsFromTwConfig,
    ...options,
    mappings: {
      ...mappings,
      ...optionsFromTwConfig.mappings,
      ...options.mappings,
    },
    placeholders: {
      ...placeholders,
      ...optionsFromTwConfig.placeholders,
      ...options.placeholders,
    },
    modifiers: {
      ...modifiers,
      ...optionsFromTwConfig.modifiers,
      ...options.modifiers,
    },
  })
}

module.exports = transformClassNamesPluginTailwind
