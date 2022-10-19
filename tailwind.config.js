const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily : {
        sans : ['DM Sans', 'sans-serif']
      },
      colors : {
        gray : {
          900 : '#171838'
        },
        teal : {
          ...colors.teal,
          500 : '#3AA39F'
        }
      }
    },
  },
  plugins: [],
}
