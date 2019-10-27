import React from 'react';
import PropTypes from 'prop-types';

export class Greeting extends React.Component {
	render() {
		return (
			<h1>Привет, {this.props.name}</h1>
		);
	}
};

Greeting.propTypes = {
	name: PropTypes.string
};
