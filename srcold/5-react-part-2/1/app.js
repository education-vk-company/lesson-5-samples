import React from 'react';
import {ThemeContext, themes} from './ThemeContext';
import ThemedButton from './ThemedButton';

// Промежуточный компонент, который использует ThemedButton
function Toolbar(props) {
	return (
		<ThemedButton onClick={props.onChangeTheme}>
			Change Theme
		</ThemedButton>
	);
}

export class AppContext extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: themes.light,
		};

		this.toggleTheme = () => {
			this.setState(state => ({
				theme:
					state.theme === themes.dark
						? themes.light
						: themes.dark,
			}));
		};
	}

	render() {
		// ThemedButton внутри ThemeProvider использует
		// значение светлой UI-темы из состояния, в то время как
		// ThemedButton, который находится вне ThemeProvider,
		// использует тёмную UI-тему из значения по умолчанию
		return (
			<nav>
				<ThemeContext.Provider value={ this.state.theme }>
					<Toolbar onChangeTheme={ this.toggleTheme } />
				</ThemeContext.Provider>
				<div>
					<ThemedButton>Default theme</ThemedButton>
				</div>
			</nav>
		);
	}
}
