import React, { Component } from 'react';

// State management
// Handling Events
export class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	// handleClick(param) {
	handleClick() {
		// debugger;
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={ this.handleClick.bind(this, 'something') }>
				{ this.state.isToggleOn ? 'ON' : 'OFF' }
			</button>
		);
	}
}
