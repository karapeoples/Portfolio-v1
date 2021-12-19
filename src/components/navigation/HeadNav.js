import React, {useState} from 'react'
import logoLight from '../images/logo-light.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import { Link } from 'react-router-dom';






const HeadNav = () => {

 const [collapsed, setCollapsed] = useState(true);

const toggleNavbar = () => setCollapsed(!collapsed);


  return (
			<div>
				<Navbar className='nav-bar'>
					<NavbarBrand>
						<Link to='/'>
							<img src={logoLight} alt='logo' className='logo' />
						</Link>
					</NavbarBrand>
					<NavbarToggler onClick={toggleNavbar} id='nav-toggle'>
						<img src='https://img.icons8.com/cotton/64/000000/menu.png' alt='menu' />
					</NavbarToggler>
				</Navbar>
				<Collapse isOpen={!collapsed} className='nav-menu'>
					<Nav className='nav-item'>
							<Link to='/about' className='link'>About</Link>
							<Link to='/projects' className='link'>Showcase</Link>
					</Nav>
				</Collapse>
			</div>
		);
}

export default HeadNav
