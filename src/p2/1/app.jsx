import { useState } from 'react'
import {ThemeContext, themes} from './ThemeContext';
import ThemedButton from './ThemedButton';

// Промежуточный компонент, который использует ThemedButton
const Toolbar = ({ onChangeTheme }) => (
	<ThemedButton onClick={onChangeTheme}>
		Change Theme
	</ThemedButton>
);

export const AppContext = () => {
	const [theme, setTheme] = useState(themes.light)

	const toggleTheme = () => {
		setTheme(theme === themes.dark ? themes.light : themes.dark)
	}

	// ThemedButton внутри ThemeProvider использует
	// значение светлой UI-темы из состояния, в то время как
	// ThemedButton, который находится вне ThemeProvider,
	// использует тёмную UI-тему из значения по умолчанию
	return (
		<nav>
			<ThemeContext.Provider value={ theme }>
				<Toolbar onChangeTheme={ toggleTheme } />
			</ThemeContext.Provider>
			<div>
				<ThemedButton>Default theme</ThemedButton>
			</div>
		</nav>
	);
}
