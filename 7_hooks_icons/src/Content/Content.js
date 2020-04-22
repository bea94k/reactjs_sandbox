import React from 'react';

const Content = ({ likes, dislikes }) => {

    // the "if" happen in Content.js before return(), so depending on the result of "if" we return one thing or another
    /* const totalVotes = likes + dislikes;

    if (totalVotes === 0) */


    if (likes === 0 && dislikes === 0) {
        return (
            <div>
                No votes yet. Be the first one to press a button.
            </div>
        )
    }

    return (
        <div>
            <h1>Votes:</h1>
            <p>Like: {likes}</p>
            <p>Dislike: {dislikes}</p>
        </div>
    );
}


export default Content;
