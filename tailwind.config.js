/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A237E',
        accent: '#304FFE',
        background: '#0A0819',
        circuit: '#304FFE',
        black: '#000000',
      },
    },
  },
  plugins: [],
}