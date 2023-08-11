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
				
			},
            typography: (theme) => ({
                DEFAULT: {
                    css: [
						{
							maxWidth: theme('maxWidth.3xl'),
							color: theme('colors.gray[900]'),
							'--tw-prose-body': theme('colors.gray[900]'),
							'--tw-prose-headings': theme('colors.gray[900]'),
							'--tw-prose-lead': theme('colors.gray[900]'),
							'--tw-prose-links': theme('colors.gray[900]'),
							'--tw-prose-bold': theme('colors.gray[900]'),
							'--tw-prose-counters': theme('colors.gray[900]'),
							'--tw-prose-bullets': theme('colors.gray[900]'),
							'--tw-prose-hr': theme('colors.gray[200]'),
							'--tw-prose-quotes': theme('colors.gray[900]'),
							'--tw-prose-quote-borders': theme('colors.gray[200]'),
							'--tw-prose-captions': theme('colors.gray[900]'),
							'--tw-prose-code': theme('colors.gray[900]'),
							'--tw-prose-pre-code': theme('colors.gray[200]'),
							'--tw-prose-pre-bg': theme('colors.gray[900]'),
							'--tw-prose-th-borders': theme('colors.gray[300]'),
							'--tw-prose-td-borders': theme('colors.gray[200]'),
							'--tw-prose-invert-body': theme('colors.gray[300]'),
							'--tw-prose-invert-headings': theme('colors.gray[300]'),
							'--tw-prose-invert-lead': theme('colors.gray[300]'),
							'--tw-prose-invert-links': theme('colors.gray[300]'),
							'--tw-prose-invert-bold': theme('colors.gray[300]'),
							'--tw-prose-invert-counters': theme('colors.gray[300]'),
							'--tw-prose-invert-bullets': theme('colors.gray[300]'),
							'--tw-prose-invert-hr': theme('colors.gray[700]'),
							'--tw-prose-invert-quotes': theme('colors.gray[300]'),
							'--tw-prose-invert-quote-borders': theme('colors.gray[700]'),
							'--tw-prose-invert-captions': theme('colors.gray[300]'),
							'--tw-prose-invert-code': theme('colors.gray[300]'),
							'--tw-prose-invert-pre-code': theme('colors.gray[300]'),
							'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
							'--tw-prose-invert-th-borders': theme('colors.gray[300]'),
							'--tw-prose-invert-td-borders': theme('colors.gray[700]'),
						},
                    ],
                },
            }),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
