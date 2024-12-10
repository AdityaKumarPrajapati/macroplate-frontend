import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagePresets({
      thumbnail: widthPreset({
        class: 'img thumb',
        loading: 'lazy',
        widths: [320, 640, 1280, 1920],
        sizes: '(max-width: 1280px) 100vw, 1280px',
        formats: {
          webp: { quality: 50 },
          jpg: { quality: 70 },
        },
      }),
    }),
  ],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.webp'],
  base: "/",
  build: {
    chunkSizeWarningLimit: 3000,
  },
})
