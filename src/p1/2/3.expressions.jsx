const formatName = (user) => {
	return `${user.firstName} ${user.lastName}`;
};

const user = {
	firstName: 'Martin',
	lastName: 'Komitsky',
};

const getGreeting = (user) => {
	if (user) {
		return <h1>Hello, {formatName(user)}!</h1>;
	}
	return <h1>Hello, Sir.</h1>;
}

export const element = <div>{getGreeting(user)}</div>;
