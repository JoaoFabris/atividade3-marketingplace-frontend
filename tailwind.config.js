/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        unyleya: {
          dark: '#3A1C32',
          primary: '#4A2440',
          coral: '#F15A4A',
          coralDark: '#D6432F',
          magenta: '#9B2960',
        },
      },
    },
  },
  plugins: [],
}