import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Merges the configurations
export default defineConfig({
  plugins: [react()],
  root: new URL('.', import.meta.url).pathname,
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
});
