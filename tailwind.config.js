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
        primeColor: "#03045e",
        secondColor: "#00b4d8",
        cardColor:  "#edf6f9"
      },
      container: {
        center: true,
        padding: "1rem"
      },
    },
  },
  plugins: [],
}