import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import flattenOutput from 'vite-plugin-flatten-output';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const root = resolve(__dirname, '../src');
const outDir = resolve(__dirname, '../dist');

const popupDir = 'pages/popup';

export default defineConfig({
  root,
  plugins: [
    tailwindcss(),
    react(),
    flattenOutput({
      removeDirs: [popupDir],
      filePattern: '.html',
    }),
    viteStaticCopy({
      targets: [
        { src: '../public/manifest.json', dest: '' },
        { src: '../public/images', dest: '' },
      ],
    }),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(root, popupDir, 'popup.html'),
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
        chunkFileNames: '[name].js',
      },
    },
  },
});
