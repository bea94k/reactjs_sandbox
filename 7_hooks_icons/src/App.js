import React, { useState } from 'react';
import './App.css';
import Button from './Button/Button'
import Content from './Content/Content'

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
      <Content likes={like} dislikes={dislike} />
    </div>
  );
}

export default App;
