import React from 'react';
import{ Redirect, Route } from 'react-router-dom';

import auth from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/sign-in',
          state: { from: props.location }
        }} />
  )} />
);

export default PrivateRoute; 