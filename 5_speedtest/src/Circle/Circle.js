import React from 'react';
import './Circle.css';

const Circle = props => {
    return (
        <div className="circle" onClick={props.clickCircle}></div>
    );
}

export default Circle