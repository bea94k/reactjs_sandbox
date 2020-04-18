import React from 'react';
import './Post.css';

const Post = props => {
    return (
        <div className="news-card">
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <p><i>{props.author}</i></p>
            <button className="like-btn" onClick={props.addLike}>Paws Up</button>
            <p className="likes=counter">{props.likes}</p>
            <button className="dislike-btn" onClick={props.removeLike}>Push it off the table</button>
            <p>{props.desc}</p>
            <button className="remove-btn" onClick={props.click}>Remove</button>
        </div>
    );
}

export default Post;
