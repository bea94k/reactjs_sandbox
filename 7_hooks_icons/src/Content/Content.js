import React from 'react';
import './Content.css';

const Content = ({ burgers, pizzas }) => {

    // the "if" happen in Content.js before return(), so depending on the result of "if" we return one thing or another
    /* const totalVotes = likes + dislikes;

    if (totalVotes === 0) */


    if (burgers === 0 && pizzas === 0) {
        return (
            <div className="content">
                No votes yet. Be the first one to choose food.
            </div>
        )
    }

    return (
        <div className="content">
            <h1>Votes:</h1>
            <p>Burgers: {burgers}</p>
            <p>Pizza: {pizzas}</p>
        </div>
    );
}


export default Content;
