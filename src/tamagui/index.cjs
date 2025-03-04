const plugin = require('../index.cjs')
const { getOptionsForTailwindConfig } = require('../common.cjs')
const mappings = require('./mappings.cjs')
const placeholders = require('./placeholders.cjs')
const modifiers = require('./modifiers.cjs')
const { createTailwindPreset } = require('./preset.cjs')

function transformTailwindToPropsPluginTamagui(_api, options = {}) {
  const optionsFromTwConfig = getOptionsForTailwindConfig(options.tailwindConfig, false)
  return plugin({
    attribute: 'c',
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

module.exports = transformTailwindToPropsPluginTamagui
module.exports.createTailwindPreset = createTailwindPreset
