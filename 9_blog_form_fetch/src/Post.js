import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Post = ({ key, dish, img, alt, ingredients, link }) => {
    /*  let cardBg;
     if (key % 2 === 0) { cardBg = 'dark' } else { cardBg = 'light' } */

    /* = key % 2 === 0 ? 'dark' : 'light'; */
    return (
        /* bg={{ key } % 2 === 0 ? 'dark' : 'light'} */
        <Card bg={'light'} border='dark' style={{ width: '100%' }}>
            <Card.Img variant="top" src={img} alt={alt} />
            <Card.Body>
                <Card.Title>{dish}</Card.Title>
                <Card.Text> Ingredients: {ingredients} </Card.Text>
                <Link to={link}><Button variant="dark" size='lg'>See recipe</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default Post;
