import React from 'react';

import './link-button.style.scss';

const LinkButton = (props) => {
	return (
		<button className={`link-btn ${props.margin? "margin-right": ""}`}  
		value={props.value} onClick={props.onClick}
		
		>
			{props.children[0]}
			{props.children[1]}
		</button>
	);
};

export default LinkButton;
