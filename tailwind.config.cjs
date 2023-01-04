/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
