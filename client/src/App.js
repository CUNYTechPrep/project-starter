import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import CandidatesPage from './pages/CandidatesPage';
import AboutUsPage from './pages/AboutUsPage';
import JobBoard from './pages/JobBoardPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';
import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Reentry</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" exact to="/news">
            News
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/mission">
            Our Mission
          </NavLink>
        </li>
      </ul>
      <AuthButton />
    </nav>
  );
}

function SeekerNavigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Reentry</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" exact to="/news">
            News
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/mission">
            Our Mission
          </NavLink>
        </li>
      </ul>
      <AuthButton />
    </nav>
  );
}

function EmployerNavigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Reentry</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/candidates">
            Candidates
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" exact to="/news">
            News
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/mission">
            Our Mission
          </NavLink>
        </li>
      </ul>
      <AuthButton />
    </nav>
  );
}

class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="column left" style={{backgroundColor:'#aaa', flex: '1'}}>
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div className="container-fluid text-center">
            <div className="row justify-content-center column middle">
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/candidates" component={CandidatesPage} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/jobs" component={JobBoard} />
              </Switch>
            </div>
          </div>
          <div className="column right" style={{backgroundColor:'#ccc', flex: '1'}}>
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>          
        </Router>
    );
  }
}


export default App;
