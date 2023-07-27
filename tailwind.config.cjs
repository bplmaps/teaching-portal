/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				regal: {
					50: '#eff8ff',
					100: '#def1ff',
					200: '#b5e4ff',
					300: '#74d0ff',
					400: '#2bbaff',
					500: '#00a1f8',
					600: '#007fd5',
					700: '#0065ac',
					800: '#00568e',
					900: '#054571',
					950: '#032d4e',
				},
				
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
