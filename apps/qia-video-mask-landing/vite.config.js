import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line no-undef
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4321;

export default defineConfig({
  plugins: [react()],
  server: {
    port,
    host: 'localhost',
  },
  build: {
    outDir: 'dist',
  },
});

