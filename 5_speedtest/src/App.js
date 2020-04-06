import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle.js';

class App extends Component {
  state = {
    score: 0
  };

  clickHandler = circleID => {
    console.log('I was clicked - ' + circleID);

    this.setState({
      score: this.state.score + 1
    })
  }

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
          <button>New game</button>
          <button>End game</button>
        </div>
      </div>
    )
  }
}

export default App;
