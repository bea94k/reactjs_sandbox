import React from 'react';
import './Header.css'

const Header = () => {
    var today = new Date();

    return (
        <div className="header">
            <h1>Like counter</h1>
            <p>{today.toDateString()}</p>
        </div>
    )
}

export default Header