/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-gray': '#333',
        'teal': '#008080'
      }
    },
    fontFamily: {
      'mont': ['Montserrat'],
      'urban': ['Urbanist'],
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.3em',
    }
  },
  plugins: [],
}

