import React from 'react';
// import './PostCard.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* const PostCard = ({ title, shortDescr, img, alt, link }) => {
    return (
        <div className="blog-card grid-wrap">
            <img src={img} alt={alt} />
            <h3>{title}</h3>
            <p>{shortDescr}</p>
            {link}
        </div>
    );
} */


const PostCard = ({ title, shortDescr, img, alt, link }) => {
    return (
        <Card bg={'dark'} text={'light'} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={alt} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{shortDescr}</Card.Text>
                <Link to={link}><Button variant="outline-light">Read more</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default PostCard;
