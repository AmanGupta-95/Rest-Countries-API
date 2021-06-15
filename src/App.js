import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import Details from './pages/detail/detail.component';

import './App.scss';

const App = () => {
	const [theme, setTheme] = useState('light');

	const handleDarkClick = (e) => setTheme(theme === 'light' ? 'dark' : 'light');
	console.log(theme);

	return (
		<Router>
			<Header handleDarkClick={handleDarkClick} theme={theme} />
			<Switch>
				<Route exact path="/" render={() => <HomePage theme={theme} />} />
				<Route path="/:name" render={(props)=> <Details {...props} theme={theme}/>} />
			</Switch>
		</Router>
	);
};

export default App;
