import React, { useEffect, useState } from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = props => {
	const [scroll400, setScroll400] = useState('');

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
			<div className='container'>
				<div className='parent'>
					<header>
						<div className='logo'>
							<FontAwesomeIcon icon={faBars} />{' '}
							<a href='http://localhost:300'>News feed</a>
						</div>

						<nav className={scroll400}>
							<a href='http://localhost:300'>Inicio</a>
							<a href='http://localhost:300'>Blog</a>
							<a href='http://localhost:300'>Proyectos</a>
							<a href='http://localhost:300'>Contacto</a>
						</nav>
					</header>
				</div>
			</div>
		</div>
	);
};

export default Header;
