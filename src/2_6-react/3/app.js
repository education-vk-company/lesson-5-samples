import React from 'react';
import {themes} from '../1';
// Контекст UI-темы, со светлым значением по умолчанию
const ThemeContext = React.createContext('light');

// Контекст активного пользователя
const UserContext = React.createContext({
	name: 'Guest',
});

export class AppContext3 extends React.Component {
	render() {
		const [signedInUser, theme] = [{name: 'Martin'}, 'light'];

		// Компонент App, который предоставляет начальные значения контекстов
		return (
			<ThemeContext.Provider value={theme}>
				<UserContext.Provider value={signedInUser}>
					<Layout />
				</UserContext.Provider>
			</ThemeContext.Provider>
		);
	}
}

function Layout() {
	return (
		<div>
			<Content />
		</div>
	);
}

// Компонент, который может использовать несколько контекстов
function Content() {
	return (
		<ThemeContext.Consumer>
			{theme => (
				<UserContext.Consumer>
					{user => (
						<ProfilePage user={user} theme={theme} />
					)}
				</UserContext.Consumer>
			)}
		</ThemeContext.Consumer>
	);
}

function ProfilePage(props) {
	console.log(props);
	return (
		<div>
			<span>User: {props.user.name}</span><br/>
			<span>Theme: {props.theme}</span>
		</div>
	)
}
