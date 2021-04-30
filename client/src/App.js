
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

//Authentication imports
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';
import LoginPage from './pages/LoginPage';

//import PostsListPage from './pages/PostsListPage';
//import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import ForumPage from './pages/ForumPage';
import WelcomePage from './pages/WelcomePage';

import PlacesPage from './pages/PlacesPage';
import SignUpPage from './pages/SignUpPage';
import ContactUsPage from './pages/ContactUsPage';

import SwipePage from './pages/SwipePage'
import ProfilePage from './components/Profile/ProfilePage';
import Thread from './components/Forum/Thread';

import './App.css';
import { ReactComponent as CloseMenu } from './assets/x.svg';
import { ReactComponent as MenuIcon } from './assets/menu.svg';
import './css/Burger.css';


// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFXY2dx8oaeL9wTegcl2HMui-IIYYchJY&callback=initMap">
// send data to back end point 
// save their location in their account since not all users are always online
// Ask users for their zipcode and then compare their zipcodes for area check

function Navigation(props) {
  //Learned from online
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false); //to close the burger menu

  return (
    <nav className="navbar navbar-default navbar-dark">
      <Link className="navbar-brand" to="/welcomepage">
        Fitbud
      </Link>
      <div className="nav-item">
        <NavLink className="nav-link" exact to="/swipe">
          Swipe
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="nav-link" exact to="/forum">
          Forum
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="nav-link" exact to="/sign-in">
          Sign In
        </NavLink>
      </div>
      <ul className={click ? 'nav-item-burger active' : 'nav-item-burger'}>
        {click ? (
          <CloseMenu className="menu-icon-close" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
        <li className="option" onClick={closeMenu}>
          <NavLink className="nav-link" onClick={closeMenu} exact to="/profile">
            My Profile
          </NavLink>
        </li>
        <li className="option" onClick={closeMenu}>
          <NavLink className="nav-link" onClick={closeMenu} exact to="/places">
            Places
          </NavLink>
        </li>
        <li className="option" onClick={closeMenu}>
          <NavLink
            className="nav-link"
            onClick={closeMenu}
            exact
            to="/about-us"
          >
            About Us
          </NavLink>
        </li>
        <li className="option" onClick={closeMenu}>
          <NavLink
            className="nav-link"
            onClick={closeMenu}
            exact
            to="/contact-us"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
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
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/sign-in" component={LoginPage} />
              <Route path="/sign-up" component={SignUpPage} />
              <Route path="/contact-us" component={ContactUsPage} />
              <PrivateRoute path="/swipe" component={SwipePage} />
              <PrivateRoute path="/profile" component={ProfilePage} />
              
            </Switch>
          </div>
        </div>
        <Route path="/thread" component={Thread} />
        <Route path="/welcomepage" component={WelcomePage} />
      </Router>
    );
  }
}

export default App;
