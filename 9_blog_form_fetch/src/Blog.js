import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';

import Post from './Post';
import CardColumns from 'react-bootstrap/CardColumns';

const Blog = () => {
    let { url } = useRouteMatch();
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then((response => {
                const postsToDisplay = response.data.slice(0, 15);
                setPost(postsToDisplay);
                /* console.log(response);
                console.log(postsToDisplay);
                console.log(post); */
            }))
    }, []);

    const blogPostList = post.map(element => {
        return (
            <Post
                key={element.id}
                dish={element.dish}
                ingredients={element.ingredients}
                img={element.img}
                alt={element.alt}
                link={`${url}/${element.id}`} />
        )
    })

    return (
        <div className="blog-cards-wrap">
            <CardColumns>
                {blogPostList}
            </CardColumns>
        </div>
    );
}

export default Blog;
