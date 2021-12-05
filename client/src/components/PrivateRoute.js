import React, { useContext } from 'react';
import{ Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useContext(AuthContext)

  return(
    <Route {...rest} render={(props) => (
      auth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )
};

export default PrivateRoute;

