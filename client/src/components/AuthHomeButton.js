import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth';
import '../css/aos.css';

const AuthHomeButton = withRouter(({ history }) => {
    if(!auth.isAuthenticated) {
        return (
          <div>
            <Link to="./sign-up">
                <button class="btn my-4 font-weight-bold"
                  style={{backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10}}>
                Sign Up!
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