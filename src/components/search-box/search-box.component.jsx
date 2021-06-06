import React from 'react';

import './search-box.style.scss';

const SearchBox = ({ placeholder, handleChange }) => (
	<div className="search-container">
		<button className="search-icon-btn">
			<i className="fas fa-search search-icon"></i>
		</button>
		<input
			className="search"
			type="search"
			placeholder={placeholder}
			onChange={handleChange}
		/>
	</div>
);

export default SearchBox;
