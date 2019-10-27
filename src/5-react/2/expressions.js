import React from 'react';

function formatName(user) {
	return `${ user.firstName } ${ user.lastName }`;
}

const user = {
	firstName: 'Martin',
	lastName: 'Komitsky'
};

export function getGreeting(user) {
	if (user) {
		return <h1>Hello, { formatName(user) }!</h1>;
	}
	return <h1>Hello, Sir.</h1>;
}

export const expression = (
	<h1>
		Hello, { formatName(user) }!
	</h1>
);
