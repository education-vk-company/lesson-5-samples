import React from 'react';

function ListItem(props) {
	return <li>{ props.value }</li>;
}

export function NumberList(props) {
	const numbers = props.numbers;

	return (
		<ul>
			{ numbers.map((number) =>
				<ListItem
					key={ number.toString() }
					value={ number }
				/>
			)}
		</ul>
	);
}
