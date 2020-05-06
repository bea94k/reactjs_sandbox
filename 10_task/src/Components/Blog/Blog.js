import React, { useState, useEffect } from "react";
import axios from 'axios';

import PostCard from "../PostCard/PostCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import FullPost from "../FullPost/FullPost";

const Blog = () => {
  const [post, setPost] = useState([]);
  let match = useRouteMatch();

  useEffect(() => {
    // what we are doing right now
    axios.get('http://localhost:3002/post')
      .then((response) => {
        const posts = response.data.slice(0, 10);
        setPost(posts); // set the data we got as the "post" variable
        console.log(posts);
      });
    // return () => {
    // cleanup - sth happens when the changes happen ex. reset the form inputs
    //  };
  }, []);
  // keeping the last array (default as "input") empty tells the program to only run the Effect once, not looping



  const removeHandler = (cardID) => {
    axios.delete('http://localhost:3002/post/' + cardID)
      .then(() => {
        return axios.get('http://localhost:3002/post');
      })
      .then(response => {
        setPost(response.data);
      });
  };

  const PostList = post.map((p) => {
    return (
      <PostCard
        key={p.id}
        title={p.title}
        desc={p.desc}
        img={p.img}
        link={`${match.url}/${p.id}`}
        // remove={() => removeHandler(p.id)}
        remove={removeHandler.bind(this, p.id)}
      /* arrow function or binding */
      />
    );
  });

  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <FullPost />
        </Route>
        <Route path={match.path}>
          <div>
            <h1>Blog</h1>
            {PostList}
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Blog;
