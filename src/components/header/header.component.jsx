import React from 'react';

import './header.style.scss';

const Header = () => (
	<div className="header">
		<div className="header-container">
			<h1 className="title">Where in the world?</h1>
			<p className="dark-mode">
				<i className="far fa-moon"></i> Dark Mode
			</p>
		</div>
	</div>
);

export default Header;
