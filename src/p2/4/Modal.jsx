import { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

// These two containers are siblings in the DOM
const modalRoot = document.getElementById('modal');

// Let's create a Modal component that is an abstraction around
// the portal API.
export const Modal = ({ children }) => {
	const [container] = useState(() => document.createElement('div'))

	useEffect(() => {
		// Append the element into the DOM on mount. We'll render
		// into the modal container element (see the HTML tab).
		modalRoot.appendChild(container);

		return () => {
			// Remove the element from the DOM when we unmount
			modalRoot.removeChild(container);
		}
	}, []);

	// Use a portal to render the children into the element
	return container && ReactDOM.createPortal(
		// Any valid React child: JSX, strings, arrays, etc.
		children,
		// A DOM element
		container,
	);
}
