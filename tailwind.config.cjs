/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				opensans: ['Open Sans', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				righteous: ['Righteous', 'cursive'],
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
