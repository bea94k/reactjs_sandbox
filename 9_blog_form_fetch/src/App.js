import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import NewPost from './NewPost';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/newpost' component={NewPost} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
