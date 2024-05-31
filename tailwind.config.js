/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Robotto', 'sans-serif' ]
      },
      colors:{
        primeColor: "#ffd60a",
        secondColor: "#202020"
      }
    },
  },
  plugins: [],
}