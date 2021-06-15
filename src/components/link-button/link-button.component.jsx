import React from 'react';
import { Link } from 'react-router-dom';

import './link-button.style.scss';

const LinkButton = ({ value, children }) => {
	return (
		<Link to={value}>
			<button className="link-btn">
				{children}
			</button>
		</Link>
	);
};

export default LinkButton;
