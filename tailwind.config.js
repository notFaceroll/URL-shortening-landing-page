module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      height: {
        'h-79': '300px',
      },
      backgroundImage: {
        'boostMobile': "url('./assets/bg-boost-mobile.svg')",
        'boostDesktop': "url('./assets/bg-boost-desktop.svg')",
        'shortenMobile': "url('./assets/bg-shorten-mobile.svg')",
        'shortenDesktop': "url('./assets/bg-shorten-desktop.svg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          cyan: '#2ACFCF',
          cyanHover: '#9fd1d1',
          darkViolet: '#3B3054',
        },
        secondary: '#F46262',
        neutral: {
          gray: '#BFBFBF',
          grayishViolet: '#9E9AA7',
          veryDarkBlue: '#35323E',
          veryDarkViolet: '#232127',
        },
      },
    },
  },
  plugins: [],
};
