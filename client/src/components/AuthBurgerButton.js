import React from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';

import auth from '../services/auth';
import '../css/ProfilePage.css'

const classes = "nav-link";
const option = "option";

const AuthBurgerButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return (
      <div>
        <li className={option}>
            <Link className={classes} to="/sign-in">
                Login
            </Link>
        </li>
        <li className={option}>
            <Link className={classes} exact
            to="/about-us">
                About Us
            </Link>
        </li>
        <li className={option}>
            <Link className={classes} exact
            to="/contact-us">
                Contact Us
            </Link>
        </li>
      </div>
    );
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div>
        <li className={option}>
            <Link className={classes} exact to="/profile">
                My Profile
            </Link>
        </li>
        <li className={option}>
            <Link className={classes} exact
            to="/about-us">
                About Us
            </Link>
        </li>
        <li className={option}>
            <Link className={classes} exact
            to="/contact-us">
                Contact Us
            </Link>
        </li>
        <li className={option}>
            <Link className={classes} onClick={logout}>
                Logout
            </Link>
        </li>
    </div>
  );
});

export default AuthBurgerButton;