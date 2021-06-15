import React from 'react';
import { Link } from 'react-router-dom';

import './link-button.style.scss';

const LinkButton = ({ value, children, theme }) => {
	return (
		<Link to={value}>
			<button className={`link-btn ${theme}`}>
				{children}
			</button>
		</Link>
	);
};

export default LinkButton;
