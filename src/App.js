import React, { Component } from 'react';

import {
	helloWorldEl,

	expression,
	getGreeting,
	attributesEl,
	childrenEl,
	xssEl,
	representationEl,

	tick,

	FnComponent,
	ClassComponent,

	tick2,
	ClockClass,

	Toggle,

	Greeting,
	LoginControl,

} from './5-react/';

class App extends Component {
	render() {
		return (
			<div>
				{ helloWorldEl }
				{ expression }
				{ getGreeting() }
				{ attributesEl }
				{ childrenEl }
				{ xssEl }
				{ representationEl }
				<FnComponent name="Martin" />
				<ClassComponent name="Sir" />
				<ClockClass />
				<Toggle />
				<Greeting isLoggedIn={ false } />
				<LoginControl />

			</div>
		);
	}
}

export default App;
