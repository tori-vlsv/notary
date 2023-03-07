module.exports = {
  content: ["./src/views/**/*.pug"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1360px',
      xl: '1441px',
    },
    extend: {
      backgroundImage: {
        'rates': "url('/assets/images/rates-bg.png')",
        'hero-contacts': "url('/assets/images/hero-contacts.png')",
        'hero-contacts-mob': "url('/assets/images/hero-contacts-mob.png')",
        'sidebar': "url('/assets/images/sidebar-bg.png')",
      },
      colors: {
        'gray-100': '#161616',
        'gray-200': '#CBC9C6',
        'gray-300': '#939191',
        'gray-600': '#B2AEAA',
        'gray-700': '#828282',
        'gray-800': '#F1F0ED',
        'red-300': '#954858',
        'red-400': '#7D192F',
        'red-500': '#681326',
      }
    },
    fontFamily: {
      'nunito': ['Nunito'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
