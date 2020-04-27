import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        Bea
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About me</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>

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
