/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ed459b",
        "secondary":"#a1499e",
        "dark":"#1e2326",
        "pure":"#e6e6e6"
      },
      fontFamily: {
        "ubuntu": ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
        "mukta": ['"Mukta"', ...defaultTheme.fontFamily.sans],
        "calligraffitti": ['"Calligraffitti"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}