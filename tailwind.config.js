/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
  "./public/**/*.{html,js}",
  './asset/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'banner-candy': "url('/asset/bg-img/banner04.jpg')",
        'sign-up': "url('/asset/bg-img/banner02.jpg')",
        'login': "url('/asset/bg-img/account-bg.jpg')",
      },
      colors:{
        navy:{
          '50': '#DBE2FB',
          '100': '#11326F',
          '150': '#6d7bba',
          '300': '#032055',
          '500': '#05245C',
          '700': '#011A48',
          '900': '#001231',
          '950': '#001232',
        },
      },
      fontFamily: {
        'Open': ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'total': '0px 0px 29.4px 0.6px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
