module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      wgray: '#F2F5F7',
      wgold: '#AC840D',
      wlight: '#FCFCFC',
      wgreen: '#069399',
      wyellow: '#FFC70010',
      wfooter: '#08ADB3',
      wlightgreen: '#08ADB310',
      wblack: '#242833',
      wwhite: '#ffffff',
      red: '#bb3f3f'
    },
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
      'serif': ['PT Serif, comic sans']
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1190px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1190px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
