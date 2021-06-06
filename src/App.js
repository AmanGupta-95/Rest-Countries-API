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
				<div className="container">
					<div className="controllers">
						<SearchBox placeholder={`Search for a country...`} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
