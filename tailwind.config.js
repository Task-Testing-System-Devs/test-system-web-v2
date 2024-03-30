/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "blue-ribbon": {
          50: "#edf8ff",
          100: "#d6efff",
          200: "#b5e4ff",
          300: "#83d5ff",
          400: "#48bcff",
          500: "#1e9aff",
          600: "#067aff",
          700: "#0166ff",
          800: "#084ec5",
          900: "#0d459b",
          950: "#0e2b5d",
        },
        // backgroundMain: "#F6F6F9", // почему-то не работает с классом bg-backgroundMain
      },

      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [],
}
