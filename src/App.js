import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import Details  from './pages/detail/detail.component';

import './App.scss';

const App = () => (
	<Router>
		<Header />
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/:name" component={Details}/>
		</Switch>
	</Router>
);

export default App;
