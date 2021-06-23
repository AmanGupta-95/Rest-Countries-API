import React from 'react';
import { Link } from 'react-router-dom';

import './link-button.style.scss';

const LinkButton = ({ value, children, theme, handleClick }) => {
	// const clickOperation = handleBackBtn ? handleBackBtn : () => {};
	return (
		<Link to={value}>
			<button className={`link-btn ${theme}`} onClick={handleClick}>
				{children}
			</button>
		</Link>
	);
};

export default LinkButton;
