import React, { useState } from 'react';
import './App.css';
import Button from './Button/Button'

const App = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const addLike = () => setLike(like + 1);
  const addDislike = () => setDislike(dislike + 1);
  const resetResult = () => {
    setLike(0);
    setDislike(0);
  }

  return (
    <div>
      <Button click={addLike} text="Like" />
      <Button click={addDislike} text="Dislike" />
      <Button click={resetResult} text="Reset" />
      <h1>Votes:</h1>
      <p>Like: {like}</p>
      <p>Dislike: {dislike}</p>
    </div>
  );
}

export default App;
