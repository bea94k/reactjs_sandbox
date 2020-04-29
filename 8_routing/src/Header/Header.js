import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <>
            <Link to='/'>Franz Hipster</Link>
            <Nav />
        </>
    );
}

export default Header;
