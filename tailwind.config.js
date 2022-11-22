/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    screens: {
      'md': '1150px'
    },
    extend: {
      backgroundImage: {
        'hellena-background': "url('/img/svg/illustration.svg')",
        'hellena-logo': "url('/img/svg/logo.svg)"
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      'hellena-orange': '#FB644B',
      'hellena-navy': '#211B3D',
      'hellena-gray': '#9B9B9B',
      'hellena-white': '#FFFFFF'
    },
    container: {
      center: true,
      padding: '20px',
    }
  },
  plugins: [],
}
