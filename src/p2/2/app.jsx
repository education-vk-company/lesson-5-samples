import { useState } from 'react';

import { ThemeContext, themes } from './ThemeContext';
import ThemeTogglerButton from './ThemeTogglerButton';

const Content = () => (
	<div>
		<ThemeTogglerButton />
	</div>
);

export const AppContext2 = () => {
	const [theme, setTheme] = useState(themes.light)

	const [toggleTheme, setToggleTheme] = useState(
		() => () => setTheme((currState) => currState === themes.dark ? themes.light : themes.dark)
	)

	// Всё состояние передаётся в качестве значения контекста
	return (
		<ThemeContext.Provider value={ { theme, toggleTheme } }>
			<Content />
		</ThemeContext.Provider>
	);
}
