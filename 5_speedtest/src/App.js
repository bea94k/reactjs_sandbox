import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle.js';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* generate random number from 1 to 4 */

class App extends Component {
  state = {
    score: 0,
    current: 0
  };

  speed = 1000;
  timer = undefined;

  /* what is the next new circle that we want to be active */
  next = () => {
    let nextActive = undefined;
    /* go as long as you get a new thing, not through the whole array/elements */
    do {
      nextActive = getRandomNumber(1, 4);
    } while (nextActive === this.state.current);
    /* if the nextActive is the same as in state, run random again, stop when they are different */

    this.setState({
      current: nextActive
    });

    this.timer = setTimeout(this.next, this.speed)
    console.log('Current random is ' + this.state.current);
  };

  clickHandler = circleID => {
    console.log('Clicked cirlce number ' + circleID);

    this.setState({
      score: this.state.score + 1
    });
  };

  startHandler = () => {
    this.next();
  };

  endHandler = () => {
    clearTimeout(this.timer);
  };

  render() {
    return (
      <div>
        <h1>Speed test</h1>
        <p>Your score: {this.state.score}</p>
        <main>
          <Circle clickCircle={this.clickHandler.bind(this, 1)} />
          <Circle clickCircle={this.clickHandler.bind(this, 2)} />
          <Circle clickCircle={this.clickHandler.bind(this, 3)} />
          <Circle clickCircle={this.clickHandler.bind(this, 4)} />
          {/* binding can pass data to the handler */}
        </main>
        <div>
          <button onClick={this.startHandler}>New game</button>
          <button onClick={this.endHandler}>End game</button>
        </div>
      </div>
    )
  }
}

export default App;
