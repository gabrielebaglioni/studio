import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      // Enable React Fast Refresh
      include: ['**/*.{tsx,jsx}'],
    }),
    tailwind({
      // Apply Tailwind to all files
      applyBaseStyles: false,
    }),
  ],
  // Static output for optimal performance
  // Astro's islands architecture loads React components only where needed
  // This is perfect for frame loading - React islands load independently
  output: 'static',
  server: {
    port: parseInt(process.env.PORT || '3000', 10),
    host: true,
  },
  vite: {
    define: {
      // Define process.env for browser compatibility
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    },
    resolve: {
      alias: {
        // Prevent Next.js from being bundled (not needed in Astro)
        'next/image': false,
        'next/link': false,
        // Alias for video-mask-landing components
        '@video-mask': join(__dirname, '../qia-video-mask-landing/src'),
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: ['next', 'next/image', 'next/link'],
    },
    // Optimize for production builds
    build: {
      // Smaller chunks for faster loading
      chunkSizeWarningLimit: 500,
      // Minify only in production
      minify: process.env.NODE_ENV === 'production' ? 'terser' : false,
      terserOptions: process.env.NODE_ENV === 'production' ? {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      } : undefined,
      rollupOptions: {
        output: {
          // Manual chunk splitting for optimal loading
          manualChunks: (id) => {
            // Vendor chunks
            if (id.includes('node_modules')) {
              // React and React DOM in separate chunk
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendor';
              }
              // Radix UI components
              if (id.includes('@radix-ui')) {
                return 'radix-vendor';
              }
              // Icons
              if (id.includes('lucide-react')) {
                return 'icons-vendor';
              }
              // All other node_modules
              return 'vendor';
            }
            // Component chunks by feature
            if (id.includes('hero-section')) {
              return 'hero';
            }
            if (id.includes('sequence') || id.includes('canvas')) {
              return 'canvas';
            }
            if (id.includes('components/ui')) {
              return 'ui-components';
            }
          },
          // Optimize chunk file names
          chunkFileNames: 'chunks/[name]-[hash].js',
          entryFileNames: 'entry/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
  },
  // Enable compression
  compressHTML: true,
  // Build configuration
  build: {
    // Inline small assets
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
});

