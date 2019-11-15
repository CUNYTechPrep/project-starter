import React, { Component } from 'react';

import "../css/login-sign-up.css";


export default class SignUpPage extends Component {
    constructor(props) {
        super(props); 
        this.state = { email: '', password: '' };
    }
    
  
    render() {
      return (
            <div>
                <div className="d-flex justify-content-center align-items-center login-container">
                    <form className="login-form text-center">

                        <h1 className="mb-5 font-weight-light text-uppercase">Sign Up</h1>

                        <div className="form-group">
                            <input type="text" className="form-control rounded-pill form-control-lg" placeholder="email adress"/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control rounded-pill form-control-lg" placeholder="Username"/>
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Password"/>
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Confirm Password"/>
                        </div>

                        <div className="form-group">
                            <input type="number" className="form-control rounded-pill form-control-lg" placeholder="Phone Number"/>
                        </div>

                        <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">Register</button>
                        <p className="mt-3 font-weight-normal">Already have an account? <a href="/login"><strong>Login</strong></a></p>

                    </form>
                </div>
            </div>
        );
    }
}
