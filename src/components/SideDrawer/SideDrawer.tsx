import React, { useEffect } from 'react';

import './SideDrawer.css';

const SideDrawer: React.FC = props => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}

	return (
		<nav className={drawerClasses}>
			<button onClick={props.close}>Close</button>
			<ul>
				<li>
					<a href='http://localhost'>Secciones</a>
				</li>
			</ul>
		</nav>
	);
};

export default SideDrawer;
