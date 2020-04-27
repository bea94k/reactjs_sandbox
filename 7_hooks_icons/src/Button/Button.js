import React from 'react';
import './Button.css';

const Button = ({ click, text, children }) => {
    return (
        <>
            <button onClick={click}>{children}  {text}</button>
        </>
    );
}

export default Button;
