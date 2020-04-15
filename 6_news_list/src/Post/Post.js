import React from 'react';
import './Post.css';

const Post = props => {
    return (
        <div className="news-card">
            <h2>{props.title}niajfdskjvneifwjngv</h2>
            <p>{props.author}niajfdskjvneifwjngv</p>
            <p>{props.desc}niajfdskjvneifwjngv</p>
            <img src={props.img} alt={props.title} />
        </div>
    );
}

export default Post;
