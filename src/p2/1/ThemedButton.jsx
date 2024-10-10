import { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const ThemedButton = (props) => {
	const theme = useContext(ThemeContext);

	return (
		<button
			{...props}
			style={theme}
		/>
	);
}

export default ThemedButton;
