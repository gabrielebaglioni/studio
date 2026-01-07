import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  server: {
    port: parseInt(process.env.PORT || '4321', 10),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

