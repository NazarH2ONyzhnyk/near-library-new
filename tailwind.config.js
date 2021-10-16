module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          300: '#FE7B02',
          400: '#FF9533',
        }
      }
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      borderWidth: ['hover', 'focus'],
      borderColor: ['active', 'focus'],
    },
  },
  plugins: [],
}
