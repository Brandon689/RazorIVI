import { defineConfig } from 'vite'
import { ivi } from "@ivi/vite-plugin"

export default defineConfig({
  plugins: [ivi()],
  build: {
    outDir: 'wwwroot/dist',
    assetsDir: '',
    rollupOptions: {
      input: 'Scripts/main.js',
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]'
      }
    }
  }
})
