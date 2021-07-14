import React from 'react';

import './loading-screen.style.scss';

function LoadingScreen() {
	return (
		<div className="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default LoadingScreen;
