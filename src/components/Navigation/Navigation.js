import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p className='navlink'>Home</p>
			<p className='navlink'>Sign Out</p>
		</nav>
	);
}



export default Navigation;