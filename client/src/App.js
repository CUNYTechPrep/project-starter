import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import SignUp from './pages/SignUp';
import CreatePost from './pages/CreatePost';
import LogIn from './pages/LogIn'
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';


import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Micro Blog</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
      
      <AuthButton/>
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
                <PrivateRoute path="/posts/new" component={CreatePost} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/log-in" component={LogIn} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
