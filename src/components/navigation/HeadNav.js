import React, { useState } from 'react'
import logoLight from '../images/logo-light.png';
import { Link } from 'react-router-dom';






const HeadNav = () => {

const [collapsed, setCollapsed] = useState(false);


	return (
		<div>
			<nav className='nav-bar'>
				<div className='nav-item'id='nav-logo'>
					<Link to='/'>
						<img src={logoLight} alt='logo' className='logo' />
					</Link>
				</div>

				<div id='nav-toggle' className='nav-item'>
					<img src='https://img.icons8.com/cotton/64/000000/menu.png' alt='menu' onClick={() => setCollapsed(!collapsed)}/>
				</div >
			</nav>

			{collapsed && (
			<div className='nav-menu'>
				<div className='nav-item'>
					<Link to='/about' className='link'>About</Link>
					<Link to='/projects' className='link'>Showcase</Link>
				</div>
			</div>
			)}
		</div>
	);
}

export default HeadNav
