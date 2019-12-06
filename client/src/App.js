import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Landing from './pages/Landing.js';
import About from './pages/About.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import FuzzySearch from './pages/FuzzySearch.js';
import logo from './img/logo.png';
import './App.css';

// function Navigation() {
//   return (<nav>
//     <NavLink exact to="/"><img className="nav-logo" src={logo} /></NavLink>
//     <ul>
//       <NavLink exact to="/"><li><span>Home</span></li></NavLink>
//       <NavLink exact to="/about"><li><span>About</span></li></NavLink>
//       <NavLink exact to="/login"><li><span>Login</span></li></NavLink>
//       <NavLink exact to="/sign-up"><li><span>Sign Up</span></li></NavLink>
//     </ul>
//   </nav>)
// }

function Navigation(props) {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="/"><img className="nav-logo" src={logo} /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/sign-up">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <div className="body">
        <Switch>
          <Route exact path="/"> <Landing /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/login"> <Login /> </Route>
          <Route path="/sign-up"> <SignUp /> </Route>
          <Route path="/sign-up"> <SignUp /> </Route>
          <Route path="/fuzzy-search"> <FuzzySearch /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
