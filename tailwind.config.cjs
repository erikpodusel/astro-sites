/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: "576px"
		},
		extend: {
			colors: {
				primary: "orange",
				secondary: "#000",
				terciary: "#000",
			}
		},
	},
	plugins: [],
}
