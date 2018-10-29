import React from 'react';

const handleClick = () => {
	alert('Why you coming FAST???');
};

const style = { background: 'black', color: 'white', height: 25, width: 100, padding: '10px 15px' };

export const attributesEl = <div
	tabIndex="0"
	data-something= { 'azaza' }
	style={ style }
	onClick={ handleClick }
>This is a clickable div</div>;
