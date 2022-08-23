/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      title: ['Playfair Display', 'serif'],
      body: ['Karla', 'sans-serif'],
    },

    extend: {
      colors: {
        myGreen: '#96d697',
        myYellow: '#ffc500',
        myRose: '#e31837',
        myCyan: '#5bc0eb',
        myWhite: '#f3f3f3',
        myBlack: '#0d0d0d',
        myPink: '#ffcaea',
        success: '#00ff00',
        error: '#ff0000',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, .6)), url('/images/dulces/bg-2.jpg')",
        'feature-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, .1)), url('/images/dulces/featured3.jpg')",
        'about-pattern':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, .4) 35%, rgba(0, 0, 0, .4) 75%, rgba(0, 0, 0, .7) 90%), url('/images/dulces/bg-1.jpg')",
        'menu-hero-pattern':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0, rgba(0, 0, 0, .2) 35%, rgba(0, 0, 0, .3) 75%, rgba(0, 0, 0, .5) 90%), url('/images/dulces/bg-3.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
