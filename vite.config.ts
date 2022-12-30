import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: (format) => `index.${format === 'es' ? 'm' : ''}js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        assetFileNames: () => `index[extname]`,
        exports: 'named',
      },
    },
  },
})
