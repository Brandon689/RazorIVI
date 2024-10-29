// vite.config.js
import { defineConfig } from 'vite'
import { ivi } from "@ivi/vite-plugin"

export default defineConfig({
  plugins: [ivi()],
  build: {
    outDir: 'wwwroot/dist',
    assetsDir: '',
    rollupOptions: {
      input: {
        'counter-island': 'Scripts/islands/counter-island.js',
        'greeting-island': 'Scripts/islands/greeting-island.js' // Add new island
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  }
})
