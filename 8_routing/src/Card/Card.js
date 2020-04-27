import React from 'react';

const Card = ({ title, shortDescr, img }) => {
    return (
        <div>
            <img src={img} />
            <h3>{title}</h3>
            <p>{shortDescr}</p>
        </div>
    );
}

export default Card;
