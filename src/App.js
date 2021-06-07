import React from 'react';

import Header from './components/header/header.component';
import SearchBox from './components/search-box/search-box.component';
import Dropdown from './components/dropdown/dropdown.component';

import './App.scss';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			countries: [],
			region: 'Asia',
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((res) => res.json())
			.then((data) => this.setState({ countries: data }));
	}

	handleRegion = (e) => this.setState({ region: e.target.value });
	handleSearch = (e) => this.setState({ searchField: e.target.value });

	render() {
		const { countries, region, searchField } = this.state;
		const regions = countries
			.map((e) => e.region)
			.filter((e, index, self) => self.indexOf(e) === index && e !== '');
		const filteredRegion = countries.filter((country) =>
			country.region.toLowerCase().includes(region.toLowerCase())
		);
		const filterCountries = filteredRegion.filter((country) =>
			country.name.toLowerCase().includes(searchField.toLowerCase())
		);
		console.log(filterCountries);
		return (
			<div className="App">
				<Header />
				<div className="container">
					<div className="controllers">
						<SearchBox
							placeholder={`Search for a country...`}
							handleChange={this.handleSearch}
						/>
						<Dropdown
							regions={regions}
							title="Filter by region"
							handleChange={this.handleRegion}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
