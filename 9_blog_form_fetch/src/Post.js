import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Post = ({ title, img, alt, descr, link }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={alt} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> {descr} </Card.Text>
                <Link to={link}><Button variant="primary">Read more</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default Post;
