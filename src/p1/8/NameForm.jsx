import { useState } from 'react';

//controlled components
export const NameForm = (props) => {
	const [value, setValue] = useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`submitted name: ${value}`);
	}

	return (
		<form onSubmit={ handleSubmit }>
			<label>
				Name:
				<input
					type="text"
					value={ value }
					name="name"
					onChange={ handleChange }
				/>
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
}
