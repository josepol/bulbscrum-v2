const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      circularMedium: 'circularMedium',
      circularBook: 'circularBook',
      circularBold: 'circularBold',
      circularLight: 'circularLight'
    },
    colors: {
      transparent: 'transparent',
      background: '#F0EFED',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        200: '#F6F7F8',
        900: '#1a202c',
      },
      blue: colors.lightBlue,
      darkBlue: '#37385D',
      red: colors.rose,
      pink: colors.fuchsia,
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
