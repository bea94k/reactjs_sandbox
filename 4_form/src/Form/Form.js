import React from 'react';
import './Form.css';

const Form = props => {
    return (
        <form>
            <label>
                <span>First name:</span>
                <input onChange={props.changeValue} name="firstname" type="text" />
            </label>
            <br />
            <label>
                <span>Last name:</span>
                <input onChange={props.changeValue} name="lastname" type="text" />
            </label>
            <br />
            <label>
                <span>Phone number:</span>
                <input onChange={props.changeValue} name="phonenumber" type="text" />
            </label>
            <br />
            <label>
                <span>Message:</span>
                <input onChange={props.changeValue} name="message" type="text" />
            </label>
        </form>
    );
};

export default Form