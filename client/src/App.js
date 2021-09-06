import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.scss';

library.add(fab, faCheckSquare, faCoffee);

const App = () => {
	return (
		<div className="App">
			<h1>Hello</h1>
			<p>This is a test</p>
			<FontAwesomeIcon icon="check-square" />
			<FontAwesomeIcon icon="fa-solid fa-truck-monster" />
			<FontAwesomeIcon icon="fa-brands fa-twitter" />
			<FontAwesomeIcon icon="fa-brands fa-font-awesome" />
			<FontAwesomeIcon icon="fa-solid fa-truck-monster" />
		</div>
	);
};

export default App;
