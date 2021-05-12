import React from 'react';
// import { Button } from './components/Button';
// import Dropdown from './components/Dropdown';
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
import LogIn from './pages/LogIn';
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';
import Profile from './pages/Profile';
import Applogo from './components/NavBarLogo'
import ProfilePic from './components/NavBarProfile'
import Helmet from 'react-helmet'
import NavBarCSS from './components/NavBarComps.module.css'

import './App.css';


function Navigation (){
/*
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }; 
  */ 

    return (
      <nav className={`navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3`}>
        <Applogo></Applogo>
        <Link className={`navbar-brand nav-links  ${NavBarCSS.homeLink} ${NavBarCSS.anim_typewriter}`} to="/">Travelers Log</Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-links" exact to="/posts/new">
              Create a Post
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-links" exact to="/profile">
              Profile
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-links" exact to="/about-us">
              About Us
          </NavLink>
          </li>
        </ul>
        <AuthButton/>
        <ProfilePic/>
      </nav>
    );
}


class App extends React.Component {
  render() {
    return (

      <Router>
        <Helmet>
          <body className={NavBarCSS.APPbody}/>
          <html className={NavBarCSS.APPhtml}/>
        </Helmet>
        <Navigation/>
        <div className="container text-center">
          <div className="row justify-content-center">
            <Switch>
              <PrivateRoute path="/posts/new" component={CreatePost} />
              <Route path="/posts/:id" component={ShowPostPage} />
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/log-in" component={LogIn} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route path="/" component={PostsListPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
