/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
        'neutral-white-2': '#fbfbfb',
      },
    },
  },
  plugins: [],
};
