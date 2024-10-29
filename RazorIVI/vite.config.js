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
        'counter-island': 'Scripts/components/Counter/index.js',
        'greeting-island': 'Scripts/components/UserGreeting/index.js'
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  }
})
