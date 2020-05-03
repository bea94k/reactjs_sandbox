import React from 'react';
import { Link, useParams } from 'react-router-dom';
import blogCards from '../data';
import { Card, Button } from 'react-bootstrap';

const Post = () => {
    let { postid } = useParams();
    const clickedPostID = blogCards.find(element => element.cardID == postid)

    return (
        <div className='about-grid grid-wrap'>
            <img src={clickedPostID.img} alt={clickedPostID.alt} />
            <Card bg={'dark'} text={'light'} style={{ width: '80%' }}>
                <Card.Body>
                    <Card.Title>{clickedPostID.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{clickedPostID.shortDescr}</Card.Subtitle>
                    <Card.Text> {clickedPostID.longDescr} </Card.Text>
                    <Link to='/blog'><Button variant="outline-light">Back to Blog</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Post;
