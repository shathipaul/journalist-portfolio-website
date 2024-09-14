/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        zoomIn: "zoomIn 0.5s ease-in-out forwards",
      },
    },
    // our colors theme
    colors: {
      primary: "#383838",
      secondary: "#FFEAE0",
      black: "#000000",
      white: "#ffffff",
      red: "#D2122E",
      gray: "#7A768C",
      semiGray: "#E0E0E0",
      lightGray: "#EEEEEE",
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },

  plugins: [],
};
