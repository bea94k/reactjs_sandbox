import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form.js';
import View from './View/View.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello there from the class component.</h1>
        <Form />
        <View />
      </div>
    )
  }
}

export default App;
