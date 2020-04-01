import React from 'react';
import './View.css';

const View = props => {
    return (
        <div className="view">
            <h2>This is your input:</h2>
            <p>First name: {props.firstname}</p>
            <p>Last name: {props.lastname}</p>
            <p>Phone number: {props.phonenumber}</p>
            <p>Message: {props.message}</p>
        </div>
    );
};

export default View;