import React, { Component } from 'react';

import {
	element,
	expression,
	getGreeting,
	attributesEl,
	childrenEl,
	xssEl,
	representationEl,
} from './5-react/';

class App extends Component {
	render() {
		return (
			<div>
				{ element }
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
