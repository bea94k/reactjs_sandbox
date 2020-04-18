import React, { Component } from 'react';
import './App.css';
import Post from './Post/Post';
/* import Example from './Example/Example';
import MapMethod from './Example/MapMethod'; */

// var posts = array with the objects of data of the news
/* http://source.unsplash.com/featured/keyword */

const newsPosts = [
  {
    postID: 1,
    title: "Cat ipsum dolor sit amet",
    author: "Kitty Cat",
    likes: 0,
    desc: "Cat ipsum dolor sit amet, what a cat-ass-trophy! attack the child. Knock over christmas tree milk the cow sugar, my siamese, stalks me (in a good way), day and night yet i’m so hungry i’m so hungry but ew not for that yet purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow.",
    img: "http://source.unsplash.com/featured/?cat"
  },
  {
    postID: 2,
    title: "Catty ipsum little kitten big roar roar",
    author: "Garfield",
    likes: 0,
    desc: "I love cuddles pooping rainbow while flying in a toasted bread costume in space. Loves cheeseburgers poop on floor and watch human clean up for eat all the power cords or give me some of your food give me some of your food give me some of your food meh, i don't want it my water bowl is clean and freshly replenished, so i'll drink from the toilet but lick the plastic bag, for proudly present butt to human. Rub face on owner catty.",
    img: "http://source.unsplash.com/featured/?kitty"
  },
  {
    postID: 3,
    title: "The dog smells bad",
    author: "Garfield",
    likes: 0,
    desc: "Push your water glass on the floor floof tum, tickle bum, jellybean footies curly toes groom forever, stretch tongue and leave it slightly out, blep, so ears back wide eyed. Eat grass, throw it back up when owners are asleep, cry for no apparent reason give me some of your food give me some of your food give me some of your food meh, i don't want it, or cough hairball, eat toilet paper. Destroy couch. I hate cucumber pls dont throw it at me.",
    img: "http://source.unsplash.com/featured/?kitten"
  },
  {
    postID: 4,
    title: "My left donut is missing",
    author: "Kitty Cat",
    likes: 0,
    desc: "My right for stinky cat for eat and than sleep on your face yet rub face on owner sit in a box for hours sleeps on my head. Lies down get video posted to internet for chasing red dot yet claws in your leg or paw at your fat belly if it smells like fish eat as much as you wish do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life and i love cuddles. Chew the plant scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food playing with balls of wool, so knock over christmas tree leave hair on owner's clothes munch, munch, chomp, chomp.",
    img: "http://source.unsplash.com/featured/?gato"
  },
  {
    postID: 5,
    title: "Grab pompom in mouth and put in water dish",
    author: "Kitty Cat",
    likes: 0,
    desc: "Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans toy mouse squeak roll over for pretend you want to go out but then don't refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am so that box? i can fit in that box sleep everywhere, but not in my bed.",
    img: "http://source.unsplash.com/featured/?gatito"
  },
  {
    postID: 6,
    title: "Disappear for four days and return home with an expensive injury",
    author: "Hello Kitty",
    likes: 0,
    desc: "Bite the vet lick arm hair but i do no work yet get food, shelter, and lots of stuff just like man who lives with us and loved it, hated it, loved it, hated it it's 3am, time to create some chaos , yet i show my fluffy belly but it's a trap! if you pet it i will tear up your hand. Jump off balcony, onto stranger's head be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day i'm going to lap some water out of my master's cup meow.",
    img: "http://source.unsplash.com/featured/?cat"
  },

];

class App extends Component {
  state = {
    postsFromState: newsPosts
  };


  // handler - on click hide/delete the news card
  hideHandler = removeID => {
    // ... is Spread operator method to create a copy of the array
    const theOldArray = [...this.state.postsFromState];
    // delete at index of id one element
    theOldArray.splice(removeID, 1);
    this.setState({ postsFromState: theOldArray });
  };

  // likes handlers
  addLike = addLikeID => {
    const copiedArray = [...this.state.postsFromState];
    copiedArray[addLikeID].likes = copiedArray[addLikeID].likes + 1;
    this.setState({
      postsFromState: copiedArray
    });
  };

  removeLike = removeLikeID => {
    const copiedArray = [...this.state.postsFromState];
    copiedArray[removeLikeID].likes = copiedArray[removeLikeID].likes - 1;
    this.setState({
      postsFromState: copiedArray
    });
  };

  render() {

    // mapping to render dynamically
    //.map(currentElement, index) - always in this order
    const newsList = this.state.postsFromState.map((post, index) => {
      return (
        <Post
          key={post.postID}
          title={post.title}
          author={post.author}
          likes={post.likes}
          addLike={this.addLike.bind(this, index)}
          removeLike={this.removeLike.bind(this, index)}
          desc={post.desc}
          img={post.img}
          click={this.hideHandler.bind(this, index)} />
      )
    })

    return (
      <div className="news-grid">
        {newsList}
      </div>
    )
  }
}

export default App;


// EXTRAS TO WORK ON:
/* add a button to remove the post, not clicking anywhere on the post
add a like counter
make it pretty
take screenshot and update readme file*/

// FIRST PART OF THE LECTURE, SIMPLER LISTS


/* class App extends Component {
  render() {
    return (
      <div>
        Woop woop!
        <hr />
        <Example />
        <hr />
        <MapMethod />
      </div>
    );
  }
}

export default App;
 */