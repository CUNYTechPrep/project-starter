import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth';

const classes = "btn btn-primary";

const AuthButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return <Link className={classes} to="/login">Login</Link>;
  }
  
  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div>
      Welcome!
      <button className={classes} onClick={logout}>Logout</button>
    </div>
  );
});

export default AuthButton;
