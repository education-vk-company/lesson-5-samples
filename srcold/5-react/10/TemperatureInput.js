import React, { Component } from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

export class TemperatureInput extends Component {
	constructor(props) {
		super(props);
		// comment the line below to see why binding is necessary
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;

		return (
			<fieldset>
				<legend>Enter temperature in { scaleNames[scale] }:</legend>
				<input value={ temperature }
					onChange={ this.handleChange }
				/>
			</fieldset>
		);
	}
}
