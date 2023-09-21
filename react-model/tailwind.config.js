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
      }
    },
  },
  plugins: [],
}