const getDefaults = () => ({
	id: 999,
	name: 'Jane Doe',
	username: 'JDog',
	email: 'banana@email.com',
	address: {
		street: 'Port of Call',
		suite: 'Apt. 896',
		city: 'Las Vegas',
		zipcode: '89998-2854',
		geo: {
			lat: '-33.3159',
			lng: '50.1496',
		},
	},
	phone: '1-702-555-5555 x55555',
	website: 'JaDo.org',
	company: {
		name: 'Unlisted',
		catchPhrase: 'We are non descipt',
		bs: 'blah blah blah',
	},
});

export const getUserMock = () => ({
	...getDefaults(),
});
