import React, { Component } from 'react';

export class ClassComponent extends Component {
	render() {
		const props = this.props;
		// props.name = 'This is insanely wrong'; // Props are Read-Only

		return <h1>Hello, { props.name }</h1>;
	}
}

