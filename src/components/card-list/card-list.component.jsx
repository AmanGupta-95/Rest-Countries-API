import React from 'react';

import Card from '../card/card.component';

import './card-list.style.scss';

const CardList = ({ countries }) => (
	<div className="cardList-container">
		{countries.map((country) => (
			<Card key={country.numericCode} country={country} />
		))}
		{/* <Card country={countries} /> */}
	</div>
);

export default CardList;
