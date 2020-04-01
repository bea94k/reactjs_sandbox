import React from 'react';
import './Form.css';

const Form = props => {
    return (
        <form>
            <label>
                <span>Customer:</span>
                <input onChange={props.changeValue} name="firstname" type="text" />
            </label>
            <br />
            <label>
                <span>Cashier:</span>
                <input onChange={props.changeValue} name="lastname" type="text" />
            </label>
            <br />
            <label>
                <span>Total price:</span>
                <input onChange={props.changeValue} name="phonenumber" type="text" />
            </label>
            <br />
            <label>
                <span>Items:</span>
                <textarea onChange={props.changeValue} name="message"></textarea>
            </label>
        </form>
    );
};

export default Form