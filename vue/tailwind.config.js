module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'bg-grey': {
        DEFAULT: '#345362',
        dark: '#345362',
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
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
