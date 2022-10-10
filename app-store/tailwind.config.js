/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#3B8BEB',
      'secondary': '#FBE8A6',
      'mainBg': '#C4DBF6',
      'midnight': '#84CEEB',
      'metalwhite': '#FEFFFF',
      'metalBlack': '#464866',
      'metalYellow': '#F3D250',
      'metalGray': '#8590AA',
      'metalRed': '#FF0000',
      'metalGreen': '#00FF00',
      'metalOrange': '#FF5F1F',
      'metalBlue': '#5AB9EA',
      'lightGray': '#FAFAFA',
      'gray': '#F2F2F2',
      'tahiti': '#3ab7bf',
      'silver': '#E7E3D4',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [],
}
