import './styles.css';
import { useState } from 'react';
import { Modal } from './Modal';

// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
export const AppPortal = () => {
	const [showModal, setShowModal] = useState(false);

	const handleShow = () => {
		setShowModal(true);
	}

	const handleHide = () => {
		setShowModal(false);
	}

	// Show a Modal on click.
	const modal = showModal ? (
		<Modal>
			<div className="modal">
				<div>
					With a portal, we can render content into a different
					part of the DOM, as if it were any other React child.
				</div>
				This is being rendered inside the #modal-container div.
				<button onClick={ handleHide }>Hide modal</button>
			</div>
		</Modal>
	) : null;

	return (
		<div className="app">
			This div has overflow: hidden.
			<button onClick={ handleShow }>Show modal</button>
			{ modal }
		</div>
	);
}
