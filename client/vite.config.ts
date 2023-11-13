/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Merges the configurations
export default defineConfig({
  plugins: [react()],
  test:{
    environment:"jsdom",
    globals: true
  },
  root: new URL('.', import.meta.url).pathname,
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
});
