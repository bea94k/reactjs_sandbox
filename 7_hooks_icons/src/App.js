import React, { useState } from 'react';
import './App.css';
import Button from './Button/Button';
import Content from './Content/Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faPizzaSlice, faCarrot } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [burger, setBurger] = useState(0);
  const [pizza, setPizza] = useState(0);

  const addBurger = () => setBurger(burger + 1);
  const addPizza = () => setPizza(pizza + 1);
  const resetResult = () => {
    setBurger(0);
    setPizza(0);
  }

  return (
    <div className='site-wrapper'>
      <div className="btn-wrapper">
        <Button click={addBurger} text="Burgers">
          <FontAwesomeIcon icon={faHamburger} />
        </Button>
        <Button click={addPizza} text="Pizza">
          <FontAwesomeIcon icon={faPizzaSlice} />
        </Button>
        <Button click={resetResult} text="Forget it! Eat a salad!">
          <FontAwesomeIcon icon={faCarrot} />
        </Button>
      </div>
      <Content burgers={burger} pizzas={pizza} />
    </div>
  );
}

export default App;
