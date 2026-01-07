/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Regular', 'sans-serif'],
        medium: ['Medium', 'sans-serif'],
        semibold: ['SemiBold', 'sans-serif'],
        bold: ['Bold', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        primary: '#0071e3',
        'dark-100': '#86868b',
        'dark-200': '#2e2e30',
        'light-100': '#adb5bd',
        black: '#000',
      },
    },
  },
  plugins: [],
};

