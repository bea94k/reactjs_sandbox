import React from 'react';
import './View.css';

const View = props => {
    return (
        <div className="paper">
            <h2>Report</h2>
            <p>Customer: {props.firstname}</p>
            <p>Cashier: {props.lastname}</p>
            <p>Total price: {props.phonenumber}</p>
            <p>Items:</p><p>{props.message}</p>
        </div>
    );
};

export default View;