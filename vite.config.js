import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Katex-Website/',
  root: 'src',
  appType: 'mpa',
  server: {
    fs: {
      strict: false,
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        zh: resolve(__dirname, 'src/zh/index.html'),
      },
    },
  },
});
