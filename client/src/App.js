import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import SignUp from './pages/SignUp';
import CreatePost from './pages/CreatePost';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';

import './App.css';


function Navigation(props) {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Micro Blog</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Post
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/sign-up">
            Sign Up
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/log-in">
            Log In
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/profile">
            Profile
        </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (

      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Switch>
              <Route path="/posts/new" component={CreatePost} />
              <Route path="/posts/:id" component={ShowPostPage} />
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/log-in" component={LogIn} />
              <Route path="/profile" component={Profile} />
              <Route path="/" component={PostsListPage} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}


export default App;
