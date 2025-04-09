/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: "#363537",
        black: "#000000",
        white: "#e2d4b7",
        red: "#e15554",
        "red-bright": "#c53837",
        blue: "#39aea9",
        "blue-bright": "#0e5858",
        purple: "#9e788f",
        "purple-bright": "#5a334b",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".border-inset": {
          "border-style": "inset",
        },
      });
    }),
  ],
};
