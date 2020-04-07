import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form.js';
import View from './View/View.js';

class App extends Component {
  state = {
    customer: '',
    cashier: '',
    totalprice: '',
    items: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
      // check what is the name of the target=input, change the value of that key-pair in the state
    })
  }

  render() {
    return (
      <div className="grid-wrap">
        <div clasName="form-block">
          <h1>Fill out according to the receipt:</h1>
          <Form changeValue={this.handleInputChange} />
        </div>
        <div className="report-sheet">
          <View customer={this.state.customer} cashier={this.state.cashier} totalprice={this.state.totalprice} items={this.state.items} />
        </div>
      </div >
    )
  }
}

export default App;
