import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <form>
            <label>
                <span>First name:</span>
                <input name="firstName" type="text" />
            </label>
            <br />
            <label>
                <span>Last name:</span>
                <input name="lastName" type="text" />
            </label>
            <br />
            <label>
                <span>Phone number:</span>
                <input name="phone" type="text" />
            </label>
            <br />
            <label>
                <span>Message:</span>
                <input name="message" type="text" />
            </label>
        </form>
    );
};

export default Form