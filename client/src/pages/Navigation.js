import React from "react";
import { 
    Link,
    NavLink
  } from 'react-router-dom';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import cookie from "react-cookies";


class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: cookie.load('token')
    }

    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    cookie.remove("token");
    cookie.remove("username");
    console.log(cookie.load('token'))
    window.location.reload()
  }

  render() {
    const isAuthenticated = cookie.load("token");
    // console.log("isAuth = " + isAuthenticated);
    return (
      <nav className="navbar navbar-expand-sm navbar-dark shadow mb-3" style={{backgroundColor: '#800080'}}>
        <LocalLibraryIcon />
        
        <Link className="navbar-brand" to="/">
          College Sharing
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/productSubmission">
              Add Product
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" exact to="/accountPage">
            My Account
          </NavLink>
        </li>
        </ul>
        {isAuthenticated ? (
          <>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={this.handleLogout}
                  exact
                  to="/"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/signup">
                  Signup
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </nav>
    );
  }
}

export default Navigation;
