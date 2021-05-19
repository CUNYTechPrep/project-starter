import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function LandingNav(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      {/* logo */}
      {/* <img src="" width="30" height="30" alt="logo" /> */}
      <Link className="navbar-brand" to="/">
        NIGHT OUT
      </Link>
      <ul className="navbar-nav mr-auto"></ul>
      <NavLink className="nav-link" exact to="/signUp">
        SIGN UP
      </NavLink>
      <NavLink className="nav-link" exact to="/aboutUs">
        About Us
      </NavLink>
    </nav>
  );
}

export default LandingNav;
