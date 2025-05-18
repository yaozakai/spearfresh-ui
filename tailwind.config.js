/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Ensure Vite-compatible paths
  theme: {
    extend: {
      fontFamily: {
        overlock: ['Overlock', 'cursive'],
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
};