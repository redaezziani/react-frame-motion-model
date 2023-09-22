/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        muted:{
          100: '#e9ebee',
          200: '#d3d7e7',
          300: '#bdc3e2',
          400: '#a7b7dd',
        }
        , 
        sky:{
          100: '#e9f5ff',
          200: '#d3ebff',
          300: '#bddfff',
          400: '#a7d5ff',
          500: '#91cbff',
          600: '#7bc1ff',
          700: '#65b7ff',
          800: '#4faeff',
          900: '#39a4ff',
        }
      }
    },
  },
  plugins: [],
}