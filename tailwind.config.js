/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Helvetica'],
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
    container: {
      center: true,
      padding: {
        mobile: '16px',
        tablet: '50px',
        desktop: '72px',
      },
    },
    extend: {
      backgroundImage: {
        'hero-desktop': "url('./src/shared/assets/images/hero-desktop.png')",
        'hero-mobile': "url('./src/shared/assets/images/hero-mobile.png')",
      },
      colors: {
        vp: {
          teal: {
            200: '#badbcf',
            300: '#78b09e',
            400: '#4fdba8',
            500: '#3dcfa1',
            600: '#1c664f',
          },
          gray: {
            500: '#9c9c9c',
            600: '#75948a',
            800: '#2e3333',
          },
          black: {
            900: '#0f0f0f',
            950: '#050505',
          },
        },
        'header-background': '#151515',
        'neutral-white-2': '#fbfbfb',
        'bright-green': '#3CCEA1',
        'pale-green': '#B9DCD0',
        'hover-green': '#4FDBA9',
      },
    },
  },
  plugins: [],
};
