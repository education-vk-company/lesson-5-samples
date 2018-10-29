import React from 'react';
import ReactDOM from 'react-dom';

function Clock(props) {
	return (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is { props.date.toLocaleTimeString() }.</h2>
		</div>
	);
}

export function tick2() {
	ReactDOM.render(
		<Clock date={ new Date() } />,
		document.getElementById('time')
	);
}

setInterval(tick2, 1000);
