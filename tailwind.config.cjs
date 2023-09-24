/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      lineHeight: {
        12: '3rem',
      },
      fontFamily: {
        trueno: ['Trueno', 'ui-sans-serif'],
        Kohinoor: ['Kohinoor Bangla', 'ui-sans-serif'],
      },
      colors: {
        bg: '#f6ecdf',
        text: '#414042',
        'header-text': '#5C6D77',
        'text-gray': '#969696',
        'text-gray-dark': '#414042',
        ts: '#5C6D77',
      },
      spacing: {
        logo: '16.915609375vw',

        container: '90%',
        'container-2': '85%',
        container3: '87%',
        'site-pt': '9.375vw',
        'site-pb': '11.14583333333333vw',
        'header-height': '9.90vw',
        'p-lg': '3.489583333333333vw',
      },
      screens: {
        landscapexs: 'landascape',
      },
      fontSize: {
        'title-xs': [
          '1.5rem',
          {
            letterSpacing: '3px',
            lineHeight: '1.2em',
          },
        ],
        'title-sm': [],
        title: [
          '3.645833333333333vw',
          {
            letterSpacing: '7px',
            lineHeight: '.7em',
          },
        ],
        xsm: [
          '.8rem',
          {
            lineHeight: '1',
            letterSpacing: '1px',
            fontWeight: '300',
          },
        ],
      },
    },
  },
  plugins: [],
};
