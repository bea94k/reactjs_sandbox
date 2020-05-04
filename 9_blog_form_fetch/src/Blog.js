import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import postData from './data';
import Post from './Post';
import CardDeck from 'react-bootstrap/CardDeck';

const Blog = () => {
    let { url } = useRouteMatch();

    const blogPostList = postData.map(post => {
        return (
            <Post
                key={post.cardID}
                title={post.title}
                descr={post.descr}
                img={post.img}
                alt={post.alt}
                link={`${url}/${post.cardID}`} />
        )
    })

    return (
        <CardDeck>
            {blogPostList}
        </CardDeck>
    );
}

export default Blog;
