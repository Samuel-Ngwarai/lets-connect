/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  content: [
    "./assets/**/*.css",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bluegrey': '#A8B5B5',
        'skyblue': '#a8d0d9',
        'darkblue': '#2E3956',
        'red': '#E1464B',
        'grey': '#E2E3DD',
        'black': '#1f262f',
        'white': '#f7f8fa',
      },
      fontFamily: {
        sans: ["'M PLUS Rounded 1c'",  ...defaultTheme.fontFamily.sans],
        mono: ["Roboto", ...defaultTheme.fontFamily.mono]
      },
      backgroundImage: {
        homebackground: 'linear-gradient(45deg, #1f262f 0% 45%, #2E3956)'
      },
      animation: {
        'box-spin': 'box-spin 3s ease infinite',
        'box-fill': 'box-fill 3s ease-in infinite'
      },
      keyframes: {
        'box-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(180deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'box-fill': {
          '0%': { height: '0%' },
          '25%': { height: '0%' },
          '50%': { height: '100%' },
          '75%': { height: '100%' },
          '100%': { height: '0%' },
        },
      }
    },
  },
  plugins: [],
}