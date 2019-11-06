import React from 'react';
import Landing from './pages/Landing.js';
import About from './pages/About.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import './App.css';
import logo from './img/logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';

function Navigation() {
  return (<nav>
    <NavLink exact to="/"><img className="nav-logo" src={logo} /></NavLink>
    <ul>
      <NavLink exact to="/"><li><span>Home</span></li></NavLink>
      <NavLink exact to="/about"><li><span>About</span></li></NavLink>
      <NavLink exact to="/login"><li><span>Login</span></li></NavLink>
      <NavLink exact to="/sign-up"><li><span>Sign Up</span></li></NavLink>
    </ul>
  </nav>)
}

function App() {
  return (
    <Router>
      <Navigation />
      <div className="body">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
