import React from 'react';

const ListItem = ({ value }) => <li>{ value }</li>;

export const NumberList = ({ numbers }) => (
	<ul>
		{ numbers.map((number) =>
			<ListItem
				key={ number.toString() }
				value={ number }
			/>
		)}
	</ul>
);
