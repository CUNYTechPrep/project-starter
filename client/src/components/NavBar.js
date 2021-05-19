import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      {/* logo */}
      {/* <img src="" width="30" height="30" alt="logo" /> */}
      <Link className="navbar-brand" to="/">
        NIGHT OUT
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to={"/createGroup/" + props.user}>
            Create a Group
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to={"/searchJoin/" + props.user}>
            Search/Join a Group
          </NavLink>
        </li>
      </ul>
      <NavLink className="nav-link" exact to="/">
        Log out
      </NavLink>
      <NavLink className="nav-link" exact to="/aboutUs">
        About Us
      </NavLink>
    </nav>
  );
}

export default NavBar;
