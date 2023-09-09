/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#2EC4B6',
				secondary: '#CBF3F0',
				tertiary: '#FF9F1C',
				'black-100': '#FFBF69',
				'black-200': '#2F4858',
				'white-100': '#f3f3f3',
			},
			boxShadow: {
				card: '0px 35px 120px -15px #211e35',
			},
			screens: {
				xs: '450px',
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/bg-green-one.png')",
			},
		},
	},
	plugins: [],
};
