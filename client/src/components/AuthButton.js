import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth';

const classes = "btn btn-primary";

const AuthButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return <div>
                <Link className={classes} to="/log-in">Login</Link>
                <Link className={classes} to="/sign-up">Sign up</Link>
            </div>
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div>
      Welcome! {auth.userName}
      <button className={classes} onClick={logout}>Logout</button>
    </div>
  );
});

export default AuthButton;