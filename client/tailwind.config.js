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
        primary: '#050c16',
        secondary: '#aaa6c3',
        tertiary: '#101530',
        'black-100': '#0d0f25',
        'black-200': '#030925',
        'white-100': '#f3f3f3',
        'sky-blue': '#18b6da',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // "hero-pattern": "url('/assets/herobg.png')",
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(320px, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
