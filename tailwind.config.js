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
      }
    },
  },
  plugins: [],
}