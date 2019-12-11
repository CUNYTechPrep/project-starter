import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
// import PostsListPage from './pages/PostsListPage';
import Random from "./pages/Random";
// import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import RestaurantsPage from './pages/RestaurantsPage';
import Incoming from './pages/Incoming';
import './App.css';
function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">[noYOUchoose]</Link>
      <ul className="navbar-nav mr-auto">

        <li className="nav-item">
          <NavLink className="nav-link" exact to="/restaurants">
            Adventures
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/incoming">
            Incoming
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
        <div className="bg">
          <div className="container-fluid text-center" >
            <div className="row justify-content-center">
              <Switch>
                <Route path="/incoming" component={Incoming} />
                <Route path="/restaurants" component={RestaurantsPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={Random} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;