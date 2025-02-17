import { defineConfig, mergeConfig } from 'vite';
import commonConfig from './vite.config';

export default defineConfig(
  mergeConfig(commonConfig, {
    build: {
      sourcemap: true, // ✅ Enable source maps for debugging
      minify: false, // ✅ Disable minification for easier debugging
      watch: {}, // ✅ Enable watch mode for dev
    },
    define: {
      __APP_ENV__: JSON.stringify('development'),
    },
  })
);
