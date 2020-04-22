import React from 'react';

const Button = ({ click, text, children }) => {
    return (
        <>
            <button onClick={click}>{children}  {text}  {children}</button>
        </>
    );
}

export default Button;
