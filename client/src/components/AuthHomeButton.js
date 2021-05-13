import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth';

const AuthHomeButton = withRouter(({ history }) => {
    if(!auth.isAuthenticated) {
        return (
          <div>
            <Link to="./sign-up">
                <button className="w3-large w3-center button" type="button">
                Sign Up Now!
                </button>
            </Link>
          </div>
        );
    }

    return (
        null
    );
});
export default AuthHomeButton;