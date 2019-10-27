import React from 'react';
import {ThemeContext} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';
import {themes} from '../1';

export class AppContext2 extends React.Component {
	constructor(props) {
		super(props);

		this.toggleTheme = () => {
			this.setState(state => ({
				theme:
					state.theme === themes.dark
						? themes.light
						: themes.dark,
			}));
		};

		// Состояние хранит функцию для обновления контекста,
		// которая будет также передана в Provider-компонент.
		this.state = {
			theme: themes.light,
			toggleTheme: this.toggleTheme,
		};
	}

	render() {
		// Всё состояние передаётся в качестве значения контекста
		return (
			<ThemeContext.Provider value={this.state}>
				<Content />
			</ThemeContext.Provider>
		);
	}
}

function Content() {
	return (
		<div>
			<ThemeTogglerButton />
		</div>
	);
}
