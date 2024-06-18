import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';

const Header = ({setCurrentPage}: {setCurrentPage: (page: string) => void}) => {
	return (
		<Navbar className="mx-3" bg="light" expand="lg">
			<Navbar.Brand onClick={() => setCurrentPage('home')}>Your Logo</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link onClick={() => setCurrentPage('home')}>Home</Nav.Link>
					<Nav.Link onClick={() => setCurrentPage('about')}>About</Nav.Link>
					<Nav.Link onClick={() => setCurrentPage('services')}>Services</Nav.Link>
					<Nav.Link onClick={() => setCurrentPage('contact')}>Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;