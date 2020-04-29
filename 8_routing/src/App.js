import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';
import Post from './Post/Post';
import './App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' exact component={Blog} />
          <Route path={'/blog/:postid'} component={Post} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
