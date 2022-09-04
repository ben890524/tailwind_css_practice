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
    extend: {
      fontSize: {
        '13px': '13px',
        '15px': '15px'
      },
      spacing: {
        '290px': '290px',
        '584px': '584px',
      },
      colors: {
        'gray-125': '#f8f9fa',
        'gray-150': '#f0f0f0',
        'gray-175': '#f2f2f2',
        'google-button-color': '#3c4043',
        'google-footer-color': '#70757a'
      },
      screens: {
        'full-desktop': '1200px'
      }
    },
  },
  plugins: [],
}
