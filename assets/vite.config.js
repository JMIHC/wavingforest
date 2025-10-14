import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: 'static',
  build: {
    target: 'esnext',
    outDir: '../priv/static',
    emptyOutDir: true,
    sourcemap: true,
    manifest: '.vite/manifest.json',
    rollupOptions: {
      input: {
        app: './js/app.js'
      },
      output: {
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, '../lib/wavingforest_web'),
      'phoenix-colocated/wavingforest': path.resolve(__dirname, '../_build/dev/phoenix-colocated/wavingforest/index.js'),
      'phoenix-colocated': path.resolve(__dirname, '../_build/dev/phoenix-colocated')
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  }
})
