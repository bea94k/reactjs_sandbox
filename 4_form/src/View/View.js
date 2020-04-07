import React from 'react';
import './View.css';

const View = props => {
    return (
        <div className="paper">
            <h2>Report</h2>
            <p>Customer: {props.customer}</p>
            <p>Cashier: {props.cashier}</p>
            <p>Total price: {props.totalprice}</p>
            <p>Items:</p><p>{props.items}</p>
        </div>
    );
};

export default View;