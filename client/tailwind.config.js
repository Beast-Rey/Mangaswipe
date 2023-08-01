module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '375px',
      'md': '600px',
      'lg': '900px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    fontFamily: {
      'fred': ['Open Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}