import React from 'react';
import { Link, useParams } from 'react-router-dom';
import postData from './data';

import Button from 'react-bootstrap/Button';

const PostPage = () => {
    let { postID } = useParams(); // get the ID from the end of the URL
    const clickedPost = postData.find(element => element.id == postID);
    // clicked post is the one that is found in postData with the ID from URL

    return (
        <div className="grid-2-col">
            <div className="single-post-page">
                <h2>{clickedPost.dish}</h2>
                <h5>Ingredients: {clickedPost.ingredients}</h5>
                <p>Preparation: {clickedPost.descr}</p>
                <p><Button as={Link} to="/blog" variant="dark" size='lg'>Back to Blog</Button></p>
            </div>
            <img src={clickedPost.img} alt={clickedPost.alt}></img>
        </div>
    );
}

export default PostPage;
