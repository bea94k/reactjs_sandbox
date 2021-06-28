import React, { useState } from "react";

const Counter = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const counterUp = () => {
    setCurrentValue(currentValue + 1);
  };

  return (
    <div>
      <h2>Counter: {currentValue}</h2>
      <button onClick={counterUp}>Counter up!</button>
    </div>
  );
};

export default Counter;
