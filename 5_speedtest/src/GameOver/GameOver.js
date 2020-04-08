import React from 'react';
import './GameOver.css';

const closeHandler = () => {
    window.location.reload();
    /* click on close button re-renders the whole app, reloads it */
}

const GameOver = props => {
    return (
        <div className="end-screen">
            <div className="end-score-box">
                <h2>Game over!</h2>
                <p>Your final score is: {props.finalscore}</p>
                <button className="close-btn" onClick={closeHandler}>Close</button>
            </div>
        </div>
    )
}

export default GameOver;