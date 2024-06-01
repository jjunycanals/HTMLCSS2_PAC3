/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,scss}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#E4F1FD',
        'secondary-color': '#3FA2F7',
        'third-color': '#9897a9',
        'bad-color': '#ED1B24',
        'active-color': '#2b6ebb',
        'analogue-color-1': '#003366',
        'analogue-color-2': '#0088cc',
        'greenishBlue-1': '#338c99',
        'greenishBlue-2': '#66b2ab',
        'greenishBlue-3': '#99d9bd',
        'background': '#E4F1FD',
        'background-2': '#FFFFFF',
      },
      translate: {
        '4px': '4px',
        '5px': '5px',
        '10px': '10px',
        '10px-10px': '10px, 10px',
      },
    },
  },
  plugins: [],
}
