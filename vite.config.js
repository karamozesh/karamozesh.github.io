import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: '/',
  test: {
    environment: 'happy-dom',
  },
  server: {
    port: 3000,
  },
});
