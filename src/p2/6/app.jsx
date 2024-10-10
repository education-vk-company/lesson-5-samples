import { Greeting } from './Greeting';
import React from 'react';

export class AppPropTypes extends React.Component {
	render() {
		return (
			<Greeting name={ 12 } />
		);
	}
};
