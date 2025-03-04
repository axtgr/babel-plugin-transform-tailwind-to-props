const { runAsWorker } = require('synckit')
const postcss = require('postcss')
const tailwind = require('tailwindcss')

// Synckit's worker to run tailwind synchronously (see common.cjs).

runAsWorker(async (twConfig, css) => {
  const processor = postcss([tailwind(twConfig)])
  const result = await processor.process(css, { from: undefined })
  return result.css
})
