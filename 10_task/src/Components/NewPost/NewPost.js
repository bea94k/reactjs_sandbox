import React, { useState } from "react";
import axios from 'axios';
import "./NewPost.css";

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: '',
    desc: '',
    img: ''
  })

  const changeValueHandler = (event) => {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value
    })
  };

  const addPostHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/post', newPost).then(response => { console.log(response.data) })
  }



  return (
    <>
      <h1>Add new post</h1>
      <form className="newPost">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={changeValueHandler} />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea type="text" name="desc" id="desc" onChange={changeValueHandler} />
        </div>
        <div>
          <label htmlFor="img">Image URL</label>
          <input type="text" name="img" id="img" onChange={changeValueHandler} />
        </div>
        <button type="submit" onClick={addPostHandler}>Add new post</button>
      </form>
    </>
  );
};

export default NewPost;
