/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav": "#0D192E",
        "light-nav": "#15223E",
        "lightest-navy": "#233554",
        "slate":"#8892b0",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        "green": "#64ffda",
        "white": "#e6f1ff",
        "green-tint": "rgb(100 255 218 / 10%)"
      },
      fontFamily: {
        "mono": ["SF Mono","Fira Code","Fira Mono","Roboto Mono",...defaultTheme.fontFamily.mono],
        "sans": ["Calibre","Inter","San Francisco","SF Pro Text",...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        "aside": "-10px 0px 30px -15px rgba(2, 12, 27, 0.7)"
      },
      fontSize: {
        "fz-xxs": "12px",
        "fz-xs": "13px",
        "fx-sm": "14px",
        "fz-md": "16px",
        "fz-lg": "18px",
        "fz-xl":"20px",
        "fz-xxl": "22px",
        "fz-heading": "32px",
        "fluid": "clamp(14px, 4vw, 18px)"
      },
      padding: {
        "12.5": "50px"
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: 0, transform:'translateY(8px)'},
          '100%': { opacity: 1, transform:'translateY(0)' },
        }
      },
      animation: {
        fadeDown: 'fadeDown 1s linear forwards',
      }
    },
  },
  plugins: [],
};
