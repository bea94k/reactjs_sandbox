import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

/* const Header = () => {
    return (
        <>
            <Link to='/'>Franz Hipster</Link>
            <Nav />
        </>
    );
} */



const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Link to='/'><Navbar.Brand>Franz Hipster</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to='/'><Nav.Link href="/">Home</Nav.Link></Link>
                        <Link to='/about'><Nav.Link href="/about">About</Nav.Link></Link>
                        <Link to='/blog'><Nav.Link href="/blog">Blog</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}


export default Header;