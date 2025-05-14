import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 3000,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3001',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    //   '/rss': { // Add RSS proxy
    //     target: 'http://localhost:3001',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
    // allowedHosts: [
    //   'bee8-2604-3d08-9b8a-7900-b9d7-c5a4-c8ab-acfc.ngrok-free.app',
    // ],
  },
  build: {
    sourcemap: true, // Ensure source maps are generated for debugging
  },
  resolve: {
    alias: {
      '@': '/src', // Alias for cleaner imports
    },
  },
});
