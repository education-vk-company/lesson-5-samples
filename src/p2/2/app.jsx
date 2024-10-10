import { useState } from 'react';

import { ThemeContext } from './ThemeContext';
import ThemeTogglerButton from './ThemeTogglerButton';
import { themes } from '../1';

const Content = () => (
	<div>
		<ThemeTogglerButton />
	</div>
);

export const AppContext2 = () => {
	const [theme, setTheme] = useState(themes.light)

	const [toggleTheme, setToggleTheme] = useState(() => {
		setTheme(theme === themes.dark ? themes.light : themes.dark)
	})

	// Всё состояние передаётся в качестве значения контекста
	return (
		<ThemeContext.Provider value={ { theme, toggleTheme } }>
			<Content />
		</ThemeContext.Provider>
	);
}
