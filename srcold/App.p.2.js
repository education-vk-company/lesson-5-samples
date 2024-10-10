import React, { Component } from 'react';

import {
	AppContext,
	AppContext2,
	AppContext3,
	AppPortal,
	AppRef,
	AppPropTypes,
	AppHookState,
	AppHookEffect,
} from './5-react-part-2';

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
				<AppHookState />
				<AppHookEffect />
			</div>
		);
	}
}

export default App;
