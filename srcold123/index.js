import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.p.1';
import App2 from './App.p.2';

ReactDOM.render(
	<React.Fragment>
		<App />
		<App2 />
	</React.Fragment>,
	document.getElementById('app')
);
