/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'Roboto'], // Set Arial as the primary font family
      // Add more font families if needed
    },
  },
  plugins: [],
}