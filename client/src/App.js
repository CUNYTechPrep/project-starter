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
import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Reentry</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/events">
            Our Mission
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/candidates">
            Candidates 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/jobs">
            Jobs 
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
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/candidates" component={CandidatesPage} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/jobs" component={JobBoard} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
