import React, { Component } from 'react';

import {
	element,
	expression,
	getGreeting,
	attributesEl
} from './5-react/';

class App extends Component {
	render() {
		return (
			<div>
				{ element }
				{ expression }
				{ getGreeting() }
				{ attributesEl }
			</div>
		);
	}
}

export default App;
