import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import HomePage from './pages/HomePage';
import CandidatesPage from './pages/CandidatesPage';
import AboutUsPage from './pages/AboutUsPage';
import JobBoard from './pages/JobBoardPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';
import './App.css';

import mainLogo from './imgs/Capture.png'

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
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <strong>Discover Reentry</strong>
          <br />
          <p>
            Find out about all of the new and exciting work that we're doing to empower those who have served their time.
          </p>
        </div>
        <div className="col-sm">
          <strong>Get Involved</strong>
          <br />
          <p>
            Join us for our next rally and meet some of our amazing sponsors, partners and clients.
          </p>
        </div>
        <div className="col-sm">
          <strong>Become A Member</strong>
          <br />
          <p>
            Create an acount and get started hiring diverse talent or sign up to begin the next stage in your life.
          </p>
        </div>
      </div>
      <hr style={{width:"105%"}}/>
      <div>
        <div className="footer-left">
          <span style={{display:"inline"}} dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> REENTRY
        </div>
        <div className="footer-right">
          <span style={{display:"inline"}}>
            <a href="localhost:3000/about-us" >About Us</a>   
            <a href="https://www.google.com/?client=safari" >{"   "}Legal</a>   
            <a href="https://www.google.com/?client=safari" >{"   "}Help</a>   
            <a href="https://www.google.com/?client=safari" >{"   "}Site Map</a>
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
        <Link className="navbar-brand" to="/">
          <Navbar.Brand href="#home">
            <img
            src={mainLogo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Link>
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
          <div className="row container-fluid text-center">
            <div className=" col-sm justify-content-center" style={{width: '90%'}}>
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
