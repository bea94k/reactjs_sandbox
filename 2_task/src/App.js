import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      /* using array because there are a lot of people's data */
      { name: 'Bea', age: 25 },
      { name: 'Mikko', age: 30 },
      { name: 'Grzegorz Brzęczyszczykiewicz', age: 99 },
    ]
  };


  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Hellooooooooooo</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }


  /* render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Hellooooooooooo</p>
        <Person name="Bea" age="25" />
        <Person name="Mikko" age="30" />
        <Person name="Grzegorz Brzęczyszczykiewicz" age="99" />
      </div>
    )
  } */
}

/* const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Hellooooooooooo</p>
      <Person name="Bea" age="25" />
      <Person name="Mikko" age="30" />
      <Person name="Grzegorz Brzęczyszczykiewicz" age="99" />
    </div>
  );
}; */

export default App;
