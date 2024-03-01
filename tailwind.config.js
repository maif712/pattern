/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-text-secondry' : "#cdcdcd",
        'dark': '#1b1b1b',
        'dark-footer': "#313131"
      }
    },
  },
  plugins: [],
  darkMode: "selector"
}

