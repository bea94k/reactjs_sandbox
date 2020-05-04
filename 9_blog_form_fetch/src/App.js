import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home/Home';
import Blog from './Blog';
import PostPage from './PostPage';
import NewPost from './NewPost';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blog/:postID' component={PostPage} />
          <Route path='/newpost' component={NewPost} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
