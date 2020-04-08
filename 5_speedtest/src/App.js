import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle.js';
import GameOver from './GameOver/GameOver.js';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* generate random number from 1 to 4 */

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    missedClicks: 0
  };

  speed = 1700;
  timer = undefined;

  /* what is the next new circle that we want to be active */
  next = () => {
    let beep = new Audio('/assets/beep.mp3')

    /* check if there are more than 3 missed clicks - if yes, end game */
    if (this.state.missedClicks >= 3) {
      this.endHandler();
      return;
    }

    beep.play();

    let nextActive = undefined;
    /* go as long as you get a new thing, not through the whole array/elements */
    do {
      nextActive = getRandomNumber(1, 4);
    } while (nextActive === this.state.current);
    /* if the nextActive is the same as in state, run random again, stop when they are different */

    this.setState({
      current: nextActive,
      missedClicks: this.state.missedClicks + 1
    });

    this.speed *= 0.98;

    this.timer = setTimeout(this.next, this.speed)
    console.log('Current random is ' + this.state.current);
  };

  clickHandler = circleID => {
    console.log('Clicked circle number ' + circleID);

    if (this.state.current !== circleID) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1,
      missedClicks: 0
    });
  };

  startHandler = () => {
    this.next();
  };

  endHandler = () => {
    let ouch = new Audio('/assets/ouch.mp3');

    clearTimeout(this.timer);

    ouch.play();

    this.setState({
      showGameOver: true
    })
  };

  render() {
    return (
      <div>
        <h1>Help the Coyote catch Roadrunner!</h1>
        <p>Your score: {this.state.score}</p>
        <main>
          <Circle
            active={this.state.current === 1}
            buttonColor="#72451b"
            clickCircle={this.clickHandler.bind(this, 1)}
          />
          <Circle
            active={this.state.current === 2}
            buttonColor="#835327"
            clickCircle={this.clickHandler.bind(this, 2)}
          />
          <Circle
            active={this.state.current === 3}
            buttonColor="#8f5e30"
            clickCircle={this.clickHandler.bind(this, 3)}
          />
          <Circle
            active={this.state.current === 4}
            buttonColor="#5e3c1d"
            clickCircle={this.clickHandler.bind(this, 4)}
          />
          {/* binding can pass data to the handler */}
        </main>
        <div className="start-end-btns">
          <button onClick={this.startHandler}>New game</button>
          <button onClick={this.endHandler}>End game</button>
        </div>
        {this.state.showGameOver && <GameOver finalscore={this.state.score} />}
        {/* if the state.show is true, render GameOver */}
      </div>
    )
  }
}

export default App;
