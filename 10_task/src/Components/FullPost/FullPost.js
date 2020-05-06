import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FullPost.css";


import axios from 'axios';

const FullPost = () => {
  const [loadedPost, setLoadedPost] = useState();
  let { postId } = useParams();

  useEffect(() => {
    if (!loadedPost) {
      axios.get('http://localhost:3002/post/' + postId)
        .then(response => {
          console.log(response.data);
          setLoadedPost(response.data);
        });
    }
  });

  let postData = undefined;

  if (postId) {
    postData = <h2>Loading content...</h2>
  }

  if (loadedPost) {
    postData = <div className="fullPost">
      <h1>Post {loadedPost.id}</h1>
      <p>{loadedPost.title}</p>
      <img src={loadedPost.img} alt={loadedPost.title} />
    </div>
  }



  return (
    postData
  );
};

export default FullPost;
