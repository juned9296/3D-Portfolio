import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Optionally, if you use Vue too, you can enable Vue support by uncommenting below:
// import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // React plugin for JSX, Fast Refresh, and React-specific optimizations
    react(),

    // Uncomment this if you use Vue in your project
    // vue(),

    // Optional: Vite plugin for managing environment variables compatibility (useful for different environments)
    // require('vite-plugin-env-compatible')(),
  ],

  // Optional: Custom configuration to support environment variables properly
  define: {
    'process.env': {}, // Allows process.env usage in Vite, needed for certain libraries
  },

  // Optional: Enable sourcemaps for better debugging
  build: {
    sourcemap: true, // Set this to false if you don't need sourcemaps in production
  },

  // Optional: Vite server configuration, can be customized as per your need
  server: {
    port: 3000, // Default port is 3000, change if necessary
    open: true, // Automatically opens the browser when Vite starts
    // Proxy API requests to a backend server (example):
    // proxy: {
    //   '/api': 'http://localhost:4000'
    // }
  },
});
