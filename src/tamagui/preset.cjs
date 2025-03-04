function assignTokens(rawTheme, pluginTheme, section, tokens = {}, getValue = (value) => value) {
  rawTheme[section] = {}
  pluginTheme[section] = {}
  Object.entries(tokens).forEach(([key, value]) => {
    let tokenName = key.replace(/^\$/, '')
    if (tokenName === 'true') tokenName = 'DEFAULT'
    rawTheme[section][tokenName] = getValue(value)
    pluginTheme[section][tokenName] = key.startsWith('$') ? key : `$${key}`
  })
}

function createTailwindPreset(tamaguiConfig) {
  if (!tamaguiConfig) {
    throw new Error('tamaguiConfig is required')
  }

  const { tokens, themes, fonts } = tamaguiConfig
  const colors = Object.fromEntries(
    Object.values(themes)
      .reverse()
      .flatMap((theme) => Object.entries(theme)),
  )
  const theme = {}
  const pluginTheme = {}

  assignTokens(theme, pluginTheme, 'spacing', tokens.space)
  assignTokens(theme, pluginTheme, 'size', tokens.size)
  assignTokens(theme, pluginTheme, 'width', tokens.size)
  assignTokens(theme, pluginTheme, 'height', tokens.size)
  assignTokens(theme, pluginTheme, 'fontFamily', fonts, (value) => value.family)
  assignTokens(theme, pluginTheme, 'borderRadius', tokens.radius)
  assignTokens(theme, pluginTheme, 'zIndex', tokens.zIndex)
  assignTokens(theme, pluginTheme, 'colors', colors)
  assignTokens(theme, pluginTheme, 'backgroundColor', colors)
  assignTokens(theme, pluginTheme, 'textColor', colors)
  assignTokens(theme, pluginTheme, 'opacity', tokens.opacity || { DEFAULT: 1 })

  return {
    content: ['./{app,src}/**/*.{js,ts,jsx,tsx}'],
    safelist: [{ pattern: /.*/ }],
    theme,
    transformClassnamesTheme: pluginTheme,
  }
}

module.exports = { createTailwindPreset }
