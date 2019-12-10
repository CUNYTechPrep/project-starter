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


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      seekerNav : false,
      employerNav : false,
      normalNav : true,
    };
    this.changeNavigation();
  }

  Footer = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <strong>Discover Reentry</strong>
          <br />
          <p>
            Find out about all of the new and exciting work that we're doing to empower those who have served their time.
          </p>
        </div>
        <div class="col-sm">
          <strong>Get Involved</strong>
          <br />
          <p>
            Join us for our next rally and meet some of our amazing sponsors, partners and clients.
          </p>
        </div>
        <div class="col-sm">
          <strong>Become A Member</strong>
          <br />
          <p>
            Create an acount and get started hiring diverse talent or sign up to begin the next stage in your life.
          </p>
        </div>
      </div>
      <hr style={{width:"90'%"}}/>
      <div>
        <div className="footer-left">
          <span style={{display:"inline"}} dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> REENTRY
        </div>
        <div className="footer-right">
          <span style={{display:"inline"}}>
            <a href="" >About Us</a>   
            <a href="" >{"   "}Legal</a>   
            <a href="" >{"   "}Help</a>   
            <a href="" >{"   "}Site Map</a>
          </span>
          <br /><br /><br /><br />
        </div>
      </div>      
    </div>
  );
}

  Navigation = () => {
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

SeekerNavigation = () => {
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

  EmployerNavigation = () => {
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

  changeNavigation = () => {

  }

  render() {
    const { seekerNav } = this.state
    const { employerNav } = this.state
    const { normalNav } = this.state
    return (
        <Router>
          { normalNav && this.Navigation() }
          { employerNav && this.SeekerNavigation() }
          { seekerNav && this.EmployerNavigation() }
          <div className="container-fluid text-center">
            <div className="row justify-content-center column middle">
              <Switch>
                <Route exact path="/" component={HomePage} />     
                <Route path="/login" component={LoginPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/candidates" component={CandidatesPage} />
                <PrivateRoute path="/jobs" component={JobBoard} />
                <PrivateRoute path="/create-job" component={CandidatesPage} />
              </Switch>
            </div>
          </div> 
        {this.Footer()}        
        </Router>
    );
  }
}


export default App;
