import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top">
            <Link to='/'><Navbar.Brand href="#home">Tina's Recipes</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav variant="pills" defaultActiveKey="/">
                    <Nav.Item>
                        <Link to='/'><Nav.Link href="/">Home</Nav.Link></Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/blog'><Nav.Link href="/blog">Blog</Nav.Link></Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/newpost'><Nav.Link href="/newpost">Create new post</Nav.Link></Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
