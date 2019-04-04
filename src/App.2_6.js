import React, { Component } from 'react';

import {
	AppContext,
	AppContext2,
	AppContext3,
	AppPortal,
	AppRef,
	AppPropTypes
} from './2_6-react/';

class App extends Component {
	render() {
		return (
			<div>
				<AppContext />
				<AppContext2 />
				<AppContext3 />
				<AppPortal />
				<AppRef />
				<AppPropTypes />
			</div>
		);
	}
}

export default App;
