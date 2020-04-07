import React from 'react';
import './Form.css';

const Form = props => {
    return (
        <form>
            <label>
                <span>Customer:</span>
                <input onChange={props.changeValue} name="customer" type="text" />
            </label>
            <br />
            <label>
                <span>Cashier:</span>
                <input onChange={props.changeValue} name="cashier" type="text" />
            </label>
            <br />
            <label>
                <span>Total price:</span>
                <input onChange={props.changeValue} name="totalprice" type="text" />
            </label>
            <br />
            <label>
                <span>Items:</span>
                <textarea onChange={props.changeValue} name="items"></textarea>
            </label>
        </form>
    );
};

export default Form