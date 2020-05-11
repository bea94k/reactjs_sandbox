import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Button from 'react-bootstrap/Button';

const PostPage = () => {
    const [loadedPost, setLoadedPost] = useState();
    let { postID } = useParams(); // get the ID from the end of the URL

    useEffect(() => {
        if (!loadedPost) {
            // if there is nothing loaded yet, get the data
            axios.get('http://localhost:3001/posts/' + postID)
                .then((response) => {
                    setLoadedPost(response.data)
                })
        }
    });

    let postData = undefined;

    // if the ID is valid, but data is still being fetched
    if (postID) {
        postData = <h3>Please wait a second...</h3>
    }

    // when the post data is loaded
    if (loadedPost) {
        postData = <div>
            <h2>{loadedPost.title}</h2>
            <h5>Ingredients: {loadedPost.ingredients}</h5>
            <p>Preparation: {loadedPost.descr}</p>
            <img src={loadedPost.img} alt={loadedPost.alt}></img>
            <Link to='/blog'><Button>Back to Blog</Button></Link>
        </div>
    }

    return (
        postData
    );
}

export default PostPage;
