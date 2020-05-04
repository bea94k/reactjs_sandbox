import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-grid">
            <img src='/img/tina.jpg' alt="Tina cooking" />
            <div>
                <h1>Hi, I'm Tina!</h1>
                <p>Lorem ipsum and a lot of food </p>
            </div>
        </div>
    );
}

export default Home;
