import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

import './dropdown.style.scss';

function DropDownItem({ title, handleChange }) {
	return (
		<button className="dropdown-item" value={`${title}`} onClick={handleChange}>
			{title}
		</button>
	);
}

function Dropdown(props) {
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
			<button onClick={toggle} className="dropdown-btn">
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
					<DropDownItem title={region} handleChange={props.handleChange} />
				))}
			</div>
		</div>
	);
}

const clickOutsideConfig = {
	handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
