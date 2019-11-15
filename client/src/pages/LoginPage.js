import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../services/auth';
import axios from 'react';

import "../css/login-sign-up.css";


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            redirectToReferrer: false,
            failed: false,
            email: "", 
            password: "" };
    }

    fieldChanged = (name) => {
        return (event) => {
            let { value } = event.target;
            this.setState({ [name]: value });
        }
    }

    login = (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        auth.authenticate(email, password)
            .then((user) => {
                this.setState({redirectToReferrer: true});
            })
            .catch((err) => {
                this.setState({failed: true});
            })
    }
    
    render() {
        const { from } = this.props.location.state || {from: {pathname: '/'} };
        const { redirectToReferrer, failed } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        let err = "";
        if (failed) {
            err = <div className="alert alert-danger" role="alert">Login Failed</div>;
        }
      return (
            <div>
                <div className="d-flex justify-content-center align-items-center login-container">
                    <form onSubmit={this.login} className="login-form text-center">
                        <h1 className="mb-5 font-weight-light text-uppercase">Login</h1>
                            { err }
                            <div className="form-group">
                                <input type="text" 
                                    className="form-control rounded-pill form-control-lg" 
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.fieldChanged('email')} />
                            </div>

                            <div className="form-group">
                                <input type="password" 
                                    className="form-control rounded-pill form-control-lg" 
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.fieldChanged('password')}
                                    />
                            </div>

                            <div className="forgot-link form-group d-flex justify-content-between align-items-center">
                                <div className="form-check">

                                    <input type="checkbox" 
                                        className="form-check-input" 
                                        id="remember"/>
                                    <label className="form-check-label">Remember Password</label>

                                </div>
                                <a href="/forgot">Forgot Password?</a>
                            </div>

                            <button type="submit" 
                                className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">Log in</button>
                            <p className="mt-3 font-weight-normal">
                                Don't have an account? 
                                <a href="/signup"><strong>Register Now</strong></a></p>

                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;