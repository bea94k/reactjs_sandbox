import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Post = ({ ID, dish, img, alt, ingredients, link }) => {
    return (
        <Card bg={ID % 2 === 0 ? 'dark' : 'light'} text={ID % 2 === 0 ? 'white' : 'dark'} border='dark' style={{ width: '100%' }}>
            <Card.Img variant="top" src={img} alt={alt} />
            <Card.Body>
                <Card.Title as="h3">{dish}</Card.Title>
                <Card.Text> Ingredients: {ingredients} </Card.Text>
                <Link to={link}><Button variant={ID % 2 === 0 ? 'light' : 'dark'} >See recipe</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default Post;
