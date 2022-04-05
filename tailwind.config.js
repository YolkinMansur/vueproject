module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
 important: true,
  theme: {
    extend: {
      colors: {
        'mapIcon': '#40bbf8',
        'secondBG': '#f7f7f7',
        'or': '#ffdcbc',
        'mainCol': '#fc6b3f',
        'grayText': '#737171',
        'discount': 'rgb(115, 190, 111)',
        'credit': 'rgb(244, 128, 18)',
        'orangelight': '#fdf8e2'
      },
      width: {
        '79': '79%',
        '19': '19%',
        '176': '176px'
      }
    },
  },
  plugins: [],
}