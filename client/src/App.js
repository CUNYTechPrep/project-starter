import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import PlacesPage from './pages/PlacesPage';
import WelcomePage from './pages/WelcomePage';
import './App.css';
import SignUpPage from './pages/SignUpPage';


function Navigation(props) {
  return (
    <nav className="navbar navbar-default navbar-dark" >
      <NavLink className="navbar-brand" exact to="/welcome">Fitbud</NavLink>
        <div className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
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
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/places" component={PlacesPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/sign-in" component={LoginPage} />
                <Route path="/sign-up" component={SignUpPage} />
                <Route path="/" component={PostsListPage} />
                <Route path="/welcome" component={WelcomePage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
