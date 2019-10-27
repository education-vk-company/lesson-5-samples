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
			<fieldset>
				<legend>
					AppContext3
				</legend>
				This is where initial data is stored
				<ThemeContext.Provider value={theme}>
					<UserContext.Provider value={signedInUser}>
						<Layout />
					</UserContext.Provider>
				</ThemeContext.Provider>
			</fieldset>
		);
	}
}

function Layout() {
	return (
		<fieldset>
			<legend>
				Layout
			</legend>
			<div>
				<Content />
			</div>
		</fieldset>
	);
}

// Компонент, который может использовать несколько контекстов
function Content() {
	return (
		<fieldset>
			<legend>
				Content
			</legend>
			<ThemeContext.Consumer>
				{theme => (
					<UserContext.Consumer>
						{user => (
							<ProfilePage user={user} theme={theme} />
						)}
					</UserContext.Consumer>
				)}
			</ThemeContext.Consumer>
		</fieldset>
	);
}

function ProfilePage(props) {
	console.log(props);
	return (
		<fieldset>
			<legend>ProfilePage</legend>
			<div>
				<span>User: {props.user.name}</span><br/>
				<span>Theme: {props.theme}</span>
			</div>
		</fieldset>
	)
}
