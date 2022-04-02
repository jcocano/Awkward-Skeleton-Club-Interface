module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'smm': '768px',
        'md': '870px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
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
