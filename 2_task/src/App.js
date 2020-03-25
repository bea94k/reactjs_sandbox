import React from 'react';
import './App.css';
import Person from './Person/Person.js'

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Hellooooooooooo</p>
      <Person name="Bea" age="25" />
      <Person name="Mikko" age="30" />
      <Person name="Grzegorz Brzęczyszczykiewicz" age="99" />
    </div>
  );
};

export default App;
