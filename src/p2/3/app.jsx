import { createContext, useContext } from 'react';
import { themes } from '../1';

// Контекст UI-темы, со светлым значением по умолчанию
const ThemeContext = createContext('light');

// Контекст активного пользователя
const UserContext = createContext({
	name: 'Guest',
});

export const AppContext3 = () => {
	const [ signedInUser, theme ] = [{ name: 'Martin' }, 'light'];

	// Компонент App, который предоставляет начальные значения контекстов
	return (
		<fieldset>
			<legend>
				AppContext3
			</legend>
			This is where initial data is stored
			<ThemeContext.Provider value={ theme }>
				<UserContext.Provider value={ signedInUser }>
					<Layout />
				</UserContext.Provider>
			</ThemeContext.Provider>
		</fieldset>
	);
}

const Layout = () => (
	<fieldset>
		<legend>
			Layout
		</legend>
		<div>
			<Content />
		</div>
	</fieldset>
);

// Компонент, который может использовать несколько контекстов
const Content = () => {
	const theme = useContext(ThemeContext);
	const user = useContext(UserContext);

	return (
		<fieldset>
			<legend>
				Content
			</legend>
			<ProfilePage user={ user } theme={ theme } />
		</fieldset>
	);
}

const ProfilePage = ({ user, theme }) => {

	return (
		<fieldset>
			<legend>ProfilePage</legend>
			<div>
				<span>User: { user.name }</span><br/>
				<span>Theme: { theme }</span>
			</div>
		</fieldset>
	)
}
