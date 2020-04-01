import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form.js';
import View from './View/View.js';

class App extends Component {
  state = {
    firstname: '',
    lastname: '',
    phonenumber: '',
    message: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
      // check what is the name of the target=input, change the value of that key-pair in the state
    })
  }

  render() {
    return (
      <div>
        <h1>Hello there from the class component.</h1>
        <Form changeValue={this.handleInputChange} />
        <View firstname={this.state.firstname} lastname={this.state.lastname} phonenumber={this.state.phonenumber} message={this.state.message} />
      </div>
    )
  }
}

export default App;
