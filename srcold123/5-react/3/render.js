import React from 'react';
import ReactDOM from 'react-dom';

export function tick() {
	const element = (
		<div>
			<h1>Hello, world!</h1>
			<h2>It's currently { new Date().toLocaleTimeString() }.</h2>
		</div>
	);
	ReactDOM.render(element, document.getElementById('time'));
}

setInterval(tick, 1000);
