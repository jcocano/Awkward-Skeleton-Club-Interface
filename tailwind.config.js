module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'fut': ['Futura', 'sans-serif']
      }, 
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      colors: {
        ascYellow: '#edff41',
        ascBlue: '#253b57',
        ascBlueLight: '#54618A',
        ascWithe: '#ffffff',
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
