import React from 'react';
import { Link } from 'react-router-dom';
// import '../../Styles/NavigationListItems.Styles.scss';

const NavigationListItems = ({ data }) => {
	// let { subNav } = data;

	return (
		<Link to={data.path} className="nav-item">
			{data.linkName}
			{/* {subNav.map((item) => (
        <SubNavigationListItems subData={item} />
      ))} */}
		</Link>
	);
};

export default NavigationListItems;
