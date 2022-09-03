/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'google-style': ['arial', 'sans-serif'],
    },
    colors:{
      'gray-150': '#f0f0f0'
    },
    extend: {
      fontSize: {
        '13px': '13px'
      }
    },
  },
  plugins: [],
}
