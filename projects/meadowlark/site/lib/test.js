exports.getTest = function() {
	return {
		currency: {
			name: 'United States Dollar',
			abbrev: 'USD'
		},
		tours: [
			{name: 'Hood River', price: '$99.85'},
			{name: 'Oregon Coast', price: '$99.85'}
		],
		specialsUrl: '/january-specials',
		currencies: ['USD', 'GBP', 'BTC']
	}
}