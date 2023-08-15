/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'bg': "#1E2123",
        'primary-blue': '#23324D',
        'primary-light-blue': '#E1EAF7',
        'primary-grey': '#F6F8FB',
        'white': '#FFFFFF',
        'text-black': '#1B1B1B',
        'text-grey': '#686D78',
        'blue-1': '#BED8FF',
        'blue-2': '#B4CDF2',
        'blue-3': '#B6C9E3',
        'blue-4': '#9BB1D1',
        'blue-5': '#97A4BB',
        'blue-6': '#636B7A',
        'blue-7': '#192438',
        'blue-8': '#151E2E',
        'error':'#F97364',
        'black-rgba':'rgba(0,0,0,0.90)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1994c1",

          "secondary": "#aefcc0",

          "accent": "#d3fca4",

          "neutral": "#1a1424",

          "base-100": "#394146",

          "info": "#416ed8",

          "success": "#3ce7bc",

          "warning": "#faaf19",

          "error": "#eb5656",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
