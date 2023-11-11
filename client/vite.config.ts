import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Merges the configurations
export default defineConfig({
  plugins: [react()],
  
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
});
