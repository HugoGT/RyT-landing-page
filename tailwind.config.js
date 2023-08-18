/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        custom_blue: {
          300: "#4fa8fb",
          400: "#306fb7",
          500: "#0f5da2",
          600: "#1a558d",
          700: "#103557",
        },
      },
      fontFamily: {
        nsans: ["Noto Sans", "Noto Sans JP", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100rem)" },
        },
      },
      animation: {
        scroll: "scroll 16s linear infinite",
      },
    },
  },
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
}
