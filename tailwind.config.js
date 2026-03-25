/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#EC5B13', // Extracted from Scan Network button
          light: '#f7ede8',  // Extracted from main background
          dark: '#333333',   // Text dark
          gray: '#8a8d93',   // Text gray/inactive
          green: '#22c55e',  // Connected status green
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
