import React, { useEffect, useState } from 'react';
import './Header.css';

import SideDrawer from '../SideDrawer/SideDrawer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = props => {
	const [scroll400, setScroll400] = useState('');
	const [drawerOpen, setSDrawerOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scroll400]);

	function handleScroll() {
		if (window.scrollY !== 400) {
			return;
		}
		setScroll400('hidden');
	}

	return (
		<div>
			<SideDrawer show={drawerOpen} close={() => setSDrawerOpen(!drawerOpen)} />
			<div className='container'>
				<div className='parent'>
					<header>
						<div className='logo'>
							<a onClick={() => setSDrawerOpen(!drawerOpen)}>
								<FontAwesomeIcon icon={faBars} />
							</a>{' '}
							<a href='http://localhost:300'>News feed</a>
						</div>

						<nav className={scroll400}>
							<a href='http://localhost:300'>POLITICS</a>
							<a href='http://localhost:300'>POLITICS</a>
							<a href='http://localhost:300'>POLITICS</a>
							<a href='http://localhost:300'>POLITICS</a>
						</nav>
					</header>
				</div>
			</div>
		</div>
	);
};

export default Header;
