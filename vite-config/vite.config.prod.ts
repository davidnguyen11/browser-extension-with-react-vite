import { defineConfig, mergeConfig } from 'vite';
import commonConfig from './vite.config';

export default defineConfig(
  mergeConfig(commonConfig, {
    build: {
      sourcemap: false, // ✅ Disable source maps for production
      minify: 'esbuild', // ✅ Enable minification for optimized builds
    },
    define: {
      __APP_ENV__: JSON.stringify('production'),
    },
  })
);
