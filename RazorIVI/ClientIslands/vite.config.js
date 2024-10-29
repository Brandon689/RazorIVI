import { defineConfig } from 'vite'
import { ivi } from "@ivi/vite-plugin"
import { resolve } from 'path'

export default defineConfig({
  plugins: [ivi()],
  build: {
    outDir: '../wwwroot/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'counter-island': resolve(__dirname, 'src/components/Counter.js'),
        'greeting-island': resolve(__dirname, 'src/components/UserGreeting.js')
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  }
})
