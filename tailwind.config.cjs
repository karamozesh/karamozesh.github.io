/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.75rem', '0.7rem'],
        sm: ['0.875rem', '1.125rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.25rem', '1.75rem'],
        xl: ['1.5rem', '2rem'],
        '2xl': ['1.75rem', '2.25rem'],
        '3xl': ['2rem', '2.5rem'],
        '4xl': ['2.5rem', '3rem'],
        '5xl': ['3rem', '3.25rem'],
        '6xl': ['4rem', '3.5rem'],
      },
      colors: {
        primaryColor: '#576BF0',
        secondaryColor: '#F5AF2B',
        thirdColor: '#17268A',
        forthColor: '#352556',
        black: {
          400: '#363636',
          500: '#2A2A2A',
          700: '#1C1E23',
          800: '#292929',
          900: '#000000',
        },
        gray: {
          700: '#ECEBEB',
        },
      },
    },
  },
  plugins: [],
};
