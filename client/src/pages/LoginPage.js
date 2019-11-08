import React, { Component } from 'react';
import axios from 'react';

import "../css/login-sign-up.css";


export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            password: '' 
        };
    }
    
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.signin(this.state);
    }


    
    render() {
      return (
            <div>
                <div className="d-flex justify-content-center align-items-center login-container">
                    <form className="login-form text-center">
                        <h1 className="mb-5 font-weight-light text-uppercase">Login</h1>
                            
                            <div className="form-group">
                                <input type="text" className="form-control rounded-pill form-control-lg" placeholder="Username"/>
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Password"/>
                            </div>

                            <div className="forgot-link form-group d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="remember"/>
                                    <label className="form-check-label" htmlFor="remember">Remember Password</label>
                                </div>
                                <a href="/forgot">Forgot Password?</a>
                            </div>

                            <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">Log in</button>
                            <p className="mt-3 font-weight-normal">Don't have an account? <a href="/signup"><strong>Register Now</strong></a></p>

                    </form>
                </div>
            </div>
        );
    }
}
