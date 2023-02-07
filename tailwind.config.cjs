/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
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
                    400: '#F2F2F2',
                    600: '#D9D9D9',
                    700: '#ECEBEB',
                    800: '#9E9E9E',
                    900: '#A7A7A7',
                },
            },
        },
    },
    // for confilict with antd
    // corePlugins: {
    //   preflight: false, // <== disable this!
    // },
    plugins: [],
};