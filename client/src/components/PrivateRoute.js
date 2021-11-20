import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const PrivateRoute = (props) => {
    const { component: Component, ...rest } = props;
    const auth = useContext(AuthContext);
    return (
        <Route {...rest} render={props => (
            auth.isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )} />
    )
}

export default PrivateRoute;