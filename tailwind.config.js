/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#881DDA", //pink
        secondary: "#2762F8",// blue
        light: "#F9FAFB", //gray
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto:["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light'],
  },
}

