/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#06cf13',
        secondary:'#848484',
        tertiary:'#0c6c12'

      }
    },
  },
  plugins: [],
}

