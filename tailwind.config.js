const defaultTheme = require('tailwindcss/defaultTheme');

// set up theming colors
const colors = {
  font: {
    white: '#fff',
    blue: '#047db5',
    darkGray: '#626462',
    lightGray: '#8a8b8a'
  },
  background: {
    blue: '#0097d0',
    lightBlue: '#dbf4fd',
    lightGray: '#f5f5f4',
    yellow: '#ffd200',   
  }
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        logo: '221px'
      },
      height: {
        logo: '36px',
        header: '72px',
        headerImg: '20rem',
      },
      fontFamily: {
        //Roboto referenced from transit website
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors: {...colors},
    },
  },
  plugins: [],
}

