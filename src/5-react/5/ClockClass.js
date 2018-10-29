import React, { Component } from 'react';

export class ClockClass extends Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		// may be async
		this.setState({
			date: new Date()
		}, () => {
			console.log(this.state);
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is { this.state.date.toLocaleTimeString() }.</h2>
			</div>
		);
	}
}
