import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.scss';

library.add(fab, fas);

const App = () => {
	return (
		<div className="App">
			<h1>Hello</h1>
			<p>This is a test</p>
			<Beverage />
			<FontAwesomeIcon icon={['fas', 'truck-monster']} />
			<FontAwesomeIcon icon={['fas', 'thumbs-up']} />
			<FontAwesomeIcon icon={['fab', 'apple']} />
			<FontAwesomeIcon icon={['fab', 'microsoft']} />
			<FontAwesomeIcon icon={['fab', 'google']} />
		</div>
	);
};

const Beverage = () => (
	<div>
		<FontAwesomeIcon icon={['fas', 'check-square']} />
		Your <FontAwesomeIcon icon={['fas', 'coffee']} /> is hot!
	</div>
);

export default App;
