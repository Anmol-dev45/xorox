/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
      sm: '480px',
      md: '978px',
      lg: '1220px',
      xl: '1440px',
    },
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