import React from 'react';
import { ThemeContext } from './ThemeContext';

class ThemedButton extends React.Component {
	render() {
		const props = this.props;
		const theme = this.context;

		return (
			<button
				{...props}
				style={theme}
			/>
		);
	}
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
