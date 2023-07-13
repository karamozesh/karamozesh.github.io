/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern1':
          "url('/src/asset/images/bg.png')",
        'hero-pattern2':
          "url('/src/asset/images/bg2.png')",
        'hero-pattern3':
          "url('/src/asset/images/bg3.png')",
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.75rem'],
        base: ['1rem', '2rem'],
        lg: ['1.25rem', '2.25rem'],
        xl: ['1.5rem', '2.5rem'],
        '2xl': ['1.75rem', '2.5rem'],
        '3xl': ['2rem', '3rem'],
        '4xl': ['2.5rem', '3rem'],
        '5xl': ['3rem', '3.25rem'],
        '6xl': ['4rem', '3.5rem'],
        '8xl': ['7rem', '8rem'],
        '9xl': ['9rem', '3rem'],
      },
      colors: {
        primaryColor: '#576BF0',
        secondaryColor: '#F5AF2B',
        'secondaryColor-lighter': '#FFEA7B',
        thirdColor: '#17268A',
        forthColor: '#352556',
        greenColor: '#3EBA60',
        redColor: '#DC1F31',
        black: {
          400: '#363636',
          500: '#2A2A2A',
          700: '#1C1E23',
          800: '#292929',
          900: '#000000',
        },
        gray: {
          400: '#F2F2F2',
          600: '#D9D9D9',
          700: '#ECEBEB',
          800: '#9E9E9E',
          900: '*A7A7A7',
        },
      },

      fontFamily: {
        zohor: ['zohor'],
      },
      boxShadow: {
        mahdis: '0px 0px 4px 0px #00000040',
        ticketConversation:
          '0px 4px 4px 0px #00000040',
        profile: '0px 3px 18px 0px #00000040',
        // 'profile-tab-active':
        //   '10px 0px 18px 0px #00000040',
        'profile-talent-btn':
          '0px 0px 4px 0px #00000040',
      },
      gridTemplateColumns: {
        ticket: '40% 40% 20%',
      },
    },
  },
  // for confilict with antd
  // corePlugins: {
  //   preflight: false, // <== disable this!
  // },
  plugins: [],
};
