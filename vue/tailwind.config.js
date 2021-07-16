module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Public Sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'bg-grey': {
        DEFAULT: '#345362',
        dark: '#345362',
      },
      'bg-dark': {
        DEFAULT: '#002A34',
        dark: '#002A34'
      },
      'bg-darkest': {
        DEFAULT: '#002128',
        dark: '#002128'
      },
      'bg-selected': {
        DEFAULT: '#4D8AA0',
        dark: '#4D8AA0',
      },
      'bg-selected-hover': {
        DEFAULT: '#9fbcc6',
        dark: '#9fbcc6'
      },
      'bg-unselected': {
        DEFAULT: 'rgba(59, 125, 149, 0.25)',
        dark: 'rgba(59, 125, 149, 0.25)'
      },
      'bg-med': {
        DEFAULT: '#2D5061',
        dark: '#2D5061'
      },
      'txt-unselected': {
        DEFAULT: '#A4C8D5',
        dark: '#A4C8D5'
      },
      'txt-selected': {
        DEFAULT: '#FFFFFF',
        dark: '#FFFFFF'
      },
      'txt-hover': {
        DEFAULT: '#002A34'
      },
      'handle': {
        DEFAULT: '#3B7D95',
        dark: '#3B7D95'
      },
      'yellow': {
        DEFAULT: '#E1BC29',
        dark: '#E1BC29'
      },
      'sky-blue': {
        DEFAULT: '#29C0E1',
        dark: '#29C0E1'
      },
      'green': {
        DEFAULT: '#1DE177',
        dark: '#1DE177'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
