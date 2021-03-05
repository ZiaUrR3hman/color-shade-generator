module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
			borderWidth: ['hover', 'focus'],
			transform: ['hover'],
		},
	},
	plugins: [],
};
