import React from 'react';

import './card.style.scss';

const Card = ({ country }) => {
	return (
		<div className="card-container">
			<img className="card-flag" alt="flag" src={country.flag} />
			<div className="card-description">
				<h3 className="card-title">{country.name}</h3>
				<div className="card-text">
					<span>Population: </span>
					{country.population.toLocaleString()}
				</div>
				<div className="card-text">
					<span>Region: </span>
					{country.region}
				</div>
				<div className="card-text">
					<span>Capital: </span>
					{country.capital}
				</div>
			</div>
		</div>
	);
};

export default Card;
