/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        "dark-purple": "#0c825b",
        "light-white": "rgba(255,255,255,0.17)",
        "light-gray": "lightslategray",
        "white": "#ffffff",
        "gray": "gray"
      },

    },
  },
  plugins: [],
}

