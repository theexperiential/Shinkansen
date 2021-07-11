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
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
