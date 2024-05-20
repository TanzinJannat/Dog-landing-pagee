/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'Recoleta Bold': ['Recoleta Bold', 'sans-serif'],
      
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
       darkCoffee: '#4F311E',
       lightBrown: '#D6A73C',
       lightRed: '#E88075',
       offWhite: '#FAE6CF',
       lightOffWhite: '#FFF9EE',
       darkBrown: '#C4A07A' 
      },

      
    },
  },
  plugins: [],
}

