import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    // Disable preflight to avoid conflicts with shell CSS in gateway mode
    preflight: false,
  },
  theme: {
    extend: {
      // Minimal theme extension - no global overrides
    },
  },
  plugins: [],
  // Prefix decision: NOT using prefix for now
  // If needed later, add: prefix: 'd-',
} satisfies Config;

