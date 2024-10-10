import { useContext } from 'react';
import { ThemeContext }  from './ThemeContext';

const ThemeTogglerButton = () => {
	// ThemeTogglerButton получает из контекста
	// не только значение UI-темы, но и функцию toggleTheme.
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button
			onClick={toggleTheme}
			style={theme}
		>
			Toggle Theme
		</button>
	);
}

export default ThemeTogglerButton;
