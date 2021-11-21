module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex:{
      '100':100,
    },
    fontSize: {
      '2xs':'.45rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {},
    screens:{
      'sm':{'max':'650px'},
    },
    // colors: {
    //   red:{
    //     111:'#FF0000',
    //     // light: 'rgb(255,50,50)',

    //     // default:'rgb(255,10,30)',

    //     // dark: 'rgb(255,0,0)'
    //   }
    // }
  },
  variants: {
    extend: {
      fontSize:['group-hover'],
      fontWeight:['group-hover'],
    },
  },
  plugins: [],
}
