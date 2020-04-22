import React from 'react';

const Content = ({ likes, dislikes }) => {
    return (
        <div>
            <h1>Votes:</h1>
            <p>Like: {likes}</p>
            <p>Dislike: {dislikes}</p>
        </div>
    );
}

export default Content;
