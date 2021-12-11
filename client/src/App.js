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
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import UserPic from './images/userpic.png';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute'; 
import AuthButton from './components/AuthButton';


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
     <AuthButton/>

      <footer className="text-center">  &copy; Hobbies Hub </footer>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
      <AuthProvider>

      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUp} />
              <Route path="/home" component={HomePage}/>
              <Route path="/profile" component={ProfilePage}/>
              <Route path="/messages" component={MessagePage}/>
              <Route path="/matches" component={MatchesPage}/>
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>

      </AuthProvider>
    );
  }
}


export default App;