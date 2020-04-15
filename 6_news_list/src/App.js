import React, { Component } from 'react';
import './App.css';
import Post from './Post/Post';

// var posts = array with the objects of data of the news
/* http://source.unsplash.com/featured/keyword */

const posts = [
  {
    title: "Cat ipsum dolor sit amet",
    author: "Kitty Cat",
    desc: "Cat ipsum dolor sit amet, what a cat-ass-trophy! attack the child. Knock over christmas tree milk the cow sugar, my siamese, stalks me (in a good way), day and night yet i’m so hungry i’m so hungry but ew not for that yet purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow.",
    img: "http://source.unsplash.com/featured/cat"
  },
  {
    title: "Cat ipsum dolor sit amet",
    author: "Kitty Cat",
    desc: "Cat ipsum dolor sit amet, what a cat-ass-trophy! attack the child. Knock over christmas tree milk the cow sugar, my siamese, stalks me (in a good way), day and night yet i’m so hungry i’m so hungry but ew not for that yet purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow.",
    img: "http://source.unsplash.com/featured/cat"
  },
  {
    title: "Cat ipsum dolor sit amet",
    author: "Kitty Cat",
    desc: "Cat ipsum dolor sit amet, what a cat-ass-trophy! attack the child. Knock over christmas tree milk the cow sugar, my siamese, stalks me (in a good way), day and night yet i’m so hungry i’m so hungry but ew not for that yet purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow.",
    img: "http://source.unsplash.com/featured/cat"
  },
  {
    title: "Cat ipsum dolor sit amet",
    author: "Kitty Cat",
    desc: "Cat ipsum dolor sit amet, what a cat-ass-trophy! attack the child. Knock over christmas tree milk the cow sugar, my siamese, stalks me (in a good way), day and night yet i’m so hungry i’m so hungry but ew not for that yet purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow.",
    img: "http://source.unsplash.com/featured/cat"
  },
  {
    title: "Cat ipsum dolor sit amet",
    author: "Kitty Cat",
    desc: "Cat ipsum dolor sit amet, what a cat-ass-trophy! attack the child. Knock over christmas tree milk the cow sugar, my siamese, stalks me (in a good way), day and night yet i’m so hungry i’m so hungry but ew not for that yet purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow.",
    img: "http://source.unsplash.com/featured/cat"
  },
  {
    title: "Cat ipsum dolor sit amet",
    author: "Kitty Cat",
    desc: "Cat ipsum dolor sit amet, what a cat-ass-trophy! attack the child. Knock over christmas tree milk the cow sugar, my siamese, stalks me (in a good way), day and night yet i’m so hungry i’m so hungry but ew not for that yet purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow.",
    img: "http://source.unsplash.com/featured/cat"
  },

];

class App extends Component {
  render() {
    return (
      <div className="news-grid">
        < Post />
        < Post />
        < Post />
        < Post />
        < Post />
        < Post />
      </div>
    )
  }
}

export default App;
