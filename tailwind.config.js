module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "rochester": ["Rochester"]
      },
      colors: {
        primary: "#2F303A",
        primaryButton: "#1762A7"
      },
      height: {
        "90v": "90vh"
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
