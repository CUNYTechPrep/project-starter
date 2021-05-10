import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import AuthButtonCSS from './AuthButton.module.css'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

import auth from '../services/auth';



const AuthButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return <div>
                
                <Link className={`btn ${AuthButtonCSS.login}`} to="/log-in">Login <LockOpenIcon style={{color:"ForestGreen"}}/></Link>
                <Link className={`btn ${AuthButtonCSS.signup}`} to="/sign-up">Sign up</Link>
            </div>
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div className={AuthButtonCSS.welcome}>
      Welcome! {auth.userName}
      <button className={`btn ${AuthButtonCSS.logout}`} onClick={logout}><LockIcon/></button>
    </div>
  );
});

export default AuthButton;