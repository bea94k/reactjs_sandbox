import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';



class App extends Component {
  state = {
    likes: 0
  };

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  substractLike = () => {
    this.setState({
      likes: this.state.likes - 1
    });
  };

  resetLikes = () => {
    this.setState({
      likes: 0
    });
  };

  render() {
    return (
      <div>
        <Header />
        <main>
          <h2 className={this.state.likes === 0 ? "likes" : this.state.likes % 2 === 0 ? "likes even" : "likes odd"}>Total likes: {this.state.likes} </h2>
          <button onClick={this.addLike}>Add a like</button>
          <button onClick={this.substractLike}>Substract a like</button>
          <button onClick={this.resetLikes}>Reset likes counter</button>
        </main>
        <Footer />
      </div>
    )
  }
};

export default App;
