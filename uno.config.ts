import { defineConfig, presetWind3, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist'],
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetWind3(), 
  ], 
})
