import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth';
import '../css/ProfilePage.css'

const classes = "button-edits";

const AuthButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return (
      <div>
        <Link className={classes} to="/signup" >SignUp</Link>
      </div>
    );
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div>
      <button className={classes} onClick={logout} 
          style={{marginLeft: 30, backgroundColor: '#34865D',
          height: 50, width: 300, borderRadius: 30, marginTop: 30}}>
        Logout
      </button>
    </div>
  );
});

export default AuthButton;