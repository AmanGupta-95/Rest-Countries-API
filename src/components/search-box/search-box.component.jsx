import React from 'react';

import './search-box.style.scss';

const SearchBox = ({ placeholder, handleChange, theme }) => (
	<div className="search-container">
		<button className="search-icon-btn">
			<i className={`fas fa-search search-icon ${theme}-mode`}></i>
		</button>
		<input
			className={`search ${theme}-mode`}
			type="search"
			placeholder={placeholder}
			onChange={handleChange}
		/>
	</div>
);

export default SearchBox;
