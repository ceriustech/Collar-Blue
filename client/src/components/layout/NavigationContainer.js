import React from 'react';
import { Link } from 'react-router-dom';
import NavigationListItems from './NavigationListItems';
import { navItems } from '../../data/NavData';

const NavigationContainer = () => (
	<nav className="navbar bg-dark">
		<h1>
			<Link to="/" className="logo">
				Collar
				<span>Blue</span>
			</Link>
		</h1>
		<ul>
			{navItems.map((item) => (
				<NavigationListItems data={item} />
			))}
		</ul>
	</nav>
);

export default NavigationContainer;
