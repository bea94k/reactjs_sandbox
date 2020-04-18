import React from 'react';
import './Post.css';

const Post = props => {
    return (
        <div className="news-card">
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <p>By {props.author}</p>
            <div className="like-grid">
                <button className="like-btn" onClick={props.addLike}>Meow!</button>
                <p className="likes-counter">{props.likes}</p>
                <button className="dislike-btn" onClick={props.removeLike}>Bleh!</button>
            </div>
            <p>{props.desc}</p>
            <button className="remove-btn" onClick={props.click}>I don't want to see it anymore</button>
        </div>
    );
}

export default Post;
