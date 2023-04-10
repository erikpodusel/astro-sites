/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '576px',
        '3xl': '1920px',
      },
      colors: {
        primary: 'orange',
        secondary: '#000',
        tertiary: '#000',
        hover: '#f3f4f6',
      },
      boxShadow: {
        light: 'rgba(90, 114, 123, 0.11) 0px 7px 30px 0px',
      },
      fontFamily: {
        montserrat: 'Montserrat, sans-serif',
      },
    },
  },
  plugins: [],
}
