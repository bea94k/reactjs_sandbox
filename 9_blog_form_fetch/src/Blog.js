import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import postData from './data';

import Post from './Post';

const Blog = () => {
    let { url } = useRouteMatch();

    const blogPostList = postData.map(element => {
        return (
            <Post
                key={element.id}
                ID={element.id}
                dish={element.dish}
                ingredients={element.ingredients}
                img={element.img}
                alt={element.alt}
                link={`${url}/${element.id}`} />
        )
    })

    return (
        <div className="blog-cards-wrap">
            {blogPostList}
        </div>
    );
}

export default Blog;
