import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './link-button.style.scss';

function refreshPage() {
	setTimeout(() => {
		window.location.reload(false);
	}, 0);
	console.log('page to reload');
}

const LinkButton = ({ value, children, history, match, location }) => {
	console.log(history, match, location);
	return (
		<Link to={value} onClick={refreshPage}>
			<button
				className="link-btn"
				value={value}
			>
				{children}
			</button>
		</Link>
	);
};

export default withRouter(LinkButton);
