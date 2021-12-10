import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import MatchesPage from './pages/MatchesPage';
import MessagePage from './pages/MessagePage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import UserPic from './images/blankProfilePic.png';
import './App.css';


function Navigation(props) {
  return (
    <nav className="sidenav">
      <div className="MoveDown">
        <img src={UserPic} alt="Profile" className="UserPic" />
        <Link className="navbar-brand" exact to="/profile">JaneDoe123</Link>
      </div>
      <ul className="navbar-nav mr-auto">
        <div className="myText">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/matches">
              Matches
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/messages">
              Messages
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/posts/new">
              Sign out
            </NavLink>
          </li>
        </div>
      </ul>
      <footer className="text-center">  &copy; Hobbies Hub </footer>
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
              <Route path="/home" component={HomePage}/>
              <Route path="/profile" component={ProfilePage}/>
              <Route path="/messages" component={MessagePage}/>
              <Route path="/matches" component={MatchesPage}/>
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;