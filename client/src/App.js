import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { navItems } from './data/NavData';
import NavigationContainer from './components/layout/NavigationContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.scss';

library.add(fab, fas);

const App = () => {
	const pageComponentArray = navItems.map(({ path, component }, key) => (
		<Route exact path={path} component={component} key={key} />
	));

	return (
		<div className="App">
			<NavigationContainer />
			<Switch>{pageComponentArray}</Switch>
		</div>
	);
};

export default App;
