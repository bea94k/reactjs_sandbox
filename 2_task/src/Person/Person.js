import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="person-card">
            <p>Hello, my name is {props.name}, and I am {props.age} years old.</p>
        </div>
    );
};

export default Person;