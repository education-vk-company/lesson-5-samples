import React, { Component } from 'react';

export class ClassComponent extends Component {
	render() {
		const { name } = this.props;
		// this.props.name = 'This is insanely wrong'; // Props are Read-Only

		return <h1>Hello, { name }</h1>;
	}
}

