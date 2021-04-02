import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
//import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import ForumPage from './pages/ForumPage';

import LoginPage from './pages/LoginPage';
import PlacesPage from './pages/PlacesPage';

import './App.css';
import SignUpPage from './pages/SignUpPage';
import Thread from './components/Thread';

function Navigation(props) {
  return (
    <nav className="navbar navbar-default navbar-dark">
      <Link className="navbar-brand" to="/">
        Fitbud
      </Link>
      <div className="nav-item">
        <NavLink className="nav-link" exact to="/forum">
          Forum
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="nav-link" exact to="/places">
          Places
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="nav-link" exact to="/sign-in">
          Sign In
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="nav-link" exact to="/about-us">
          About Us
        </NavLink>
      </div>
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
              <Route path="/forum" component={ForumPage} />
              <Route path="/posts/:id" component={ShowPostPage} />
              <Route path="/places" component={PlacesPage} />
              <Route path="/thread-list" component={Thread} />
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/sign-in" component={LoginPage} />
              <Route path="/sign-up" component={SignUpPage} />
              <Route path="/" component={PostsListPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
