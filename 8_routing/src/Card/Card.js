import React from 'react';
import './Card.css';

const Card = ({ title, shortDescr, img, alt }) => {
    return (
        <div className="blog-card grid-wrap">
            <img src={img} alt={alt} />
            <h3>{title}</h3>
            <p>{shortDescr}</p>
            <button>Placeholder</button>
        </div>
    );
}

export default Card;
