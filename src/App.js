import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import Details from './pages/detail/detail.component';

import './App.scss';

const App = () => {
	const [theme, setTheme] = useState('light');
	document.body.classList.add('light-background');
	const handleDarkClick = (e) => {
		const currentTheme = theme === 'light' ? 'dark' : 'light';
		if (currentTheme === 'light') {
			document.body.classList.remove('dark-background');
			document.body.classList.add('light-background');
		} else {
			document.body.classList.add('dark-background');
			document.body.classList.remove('light-background');
		}
		setTheme(currentTheme);
	};
	return (
		<Router>
			<Header handleDarkClick={handleDarkClick} theme={theme} />
			<Switch>
				<Route exact path="/" render={() => <HomePage theme={theme} />} />
				<Route
					path="/:name"
					render={(props) => <Details {...props} theme={theme} />}
				/>
			</Switch>
		</Router>
	);
};

export default App;
