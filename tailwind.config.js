/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Ensure Vite-compatible paths
  theme: {
    extend: {
      fontFamily: {
        overlock: ['Overlock', 'cursive'],
      },
    },
  },
  plugins: [],
};