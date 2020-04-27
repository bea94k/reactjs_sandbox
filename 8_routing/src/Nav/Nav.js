import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <h2>Franz Hipster</h2>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About me</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
