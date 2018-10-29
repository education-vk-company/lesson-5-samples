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
			</div>
		);
	}
}

export default App;
