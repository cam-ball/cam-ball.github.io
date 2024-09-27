/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'slate': '#363537',
        'black': '#000000',
        'white': '#e2d4b7',
        'red': '#c53837',
        'red-light': '#e15554',
        'blue': '#0e5858',
        'blue-light': '#39aea9',
        'purple': '#5a334b',
        'purple-light': '#9e788f',
      }
    },
  },
  plugins: [],
}

