import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from "path"
// Added the missing import for the image optimizer plugin
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // This will handle your 13 images seamlessly at build time
    ViteImageOptimizer({
      webp: { lossless: true }, // Preserves exact pixel quality
      png: { quality: 80 },
      jpeg: { quality: 80 }
    }),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
})