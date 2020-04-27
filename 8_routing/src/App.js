import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';
import './App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
