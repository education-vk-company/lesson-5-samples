import React from 'react';
import {ThemeContext} from './ThemeContext';

function ThemeTogglerButton() {
	// ThemeTogglerButton получает из контекста
	// не только значение UI-темы, но и функцию toggleTheme.
	return (
		<ThemeContext.Consumer>
			{({ theme, toggleTheme }) => (
				<button
					onClick={toggleTheme}
					style={theme}>
					Toggle Theme
				</button>
			)}
		</ThemeContext.Consumer>
	);
}

export default ThemeTogglerButton;
