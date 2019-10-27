import React from 'react';

const handleClick = () => {
	alert('Why you coming FAST???');
};

const style = {
	background: 'black',
	color: 'white',
	textAlign: 'center',
	width: 155,
	fontFamily: 'Arial',
	padding: '10px 15px',
	borderRadius: 3,
	border: '1px solid #d3d3d3'
};

export const attributesEl = <div
	tabIndex="0"
	data-something={ 'azaza' }
	style={ style }
	onClick={ handleClick }
>This is a clickable div</div>;
