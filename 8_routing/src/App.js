import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';
import Post from './Post/Post';
// import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
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
