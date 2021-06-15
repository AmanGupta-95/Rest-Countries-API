import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

import './dropdown.style.scss';

function DropDownItem({ title, handleChange, theme }) {
	return (
		<button
			className={`dropdown-item ${theme}`}
			value={`${title}`}
			onClick={handleChange}
		>
			{title}
		</button>
	);
}

function Dropdown(props) {
	let count = 0;
	const [showMenu, setShowMenu] = useState(false);
	const [initial, setInitial] = useState(true);
	Dropdown.handleClickOutside = () => setShowMenu(false);

	function toggle(e) {
		e.preventDefault();
		setInitial(false);
		setShowMenu((prevShowMenu) => (prevShowMenu ? false : true));
	}

	return (
		<div className="dropdown-container">
			<button onClick={toggle} className={`dropdown-btn ${props.theme}`}>
				<span>{props.title}</span>
				<i className="fas fa-chevron-down"></i>
			</button>
			<div
				className={`dropdown-menu
				${initial ? 'initial' : null}
				${showMenu ? 'show' : 'hide'}
			`}
			>
				{props.regions.map((region) => (
					<DropDownItem
						title={region}
						handleChange={props.handleChange}
						key={count++}
						theme={props.theme}
					/>
				))}
			</div>
		</div>
	);
}

const clickOutsideConfig = {
	handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
