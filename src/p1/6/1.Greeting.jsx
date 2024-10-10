// Conditional rendering
const UserGreeting = () => {
	return <h1>Welcome back!</h1>;
}

const GuestGreeting = () => {
	return <h1>Please sign up.</h1>;
}

export const Greeting = ({ isLoggedIn }) => {
	if (isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}
