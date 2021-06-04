import React from 'react';

import Header from './components/header/header.component';
import SearchBox from './components/search-box/search-box.component';

import './App.scss';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Header />
				<SearchBox placeholder={`Search for a country...`} />
			</div>
		);
	}
}

export default App;
