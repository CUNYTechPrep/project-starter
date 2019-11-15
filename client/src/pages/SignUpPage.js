import React, { Component } from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
import axios from "axios";
import "../css/login-sign-up.css";

class SignUpPage extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            username: '', 
            email: '', 
            password: '', 
            password2: '',
            success: false,
            error: false };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        console.log("DO SOMETHING")
        const newUser = {
            firstName: this.state.username,
            lastName: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        console.log(newUser);

        axios
            .post("api/auth/signup/", newUser)
            .then(res => {
                if(res.ok) {
                    console.log("Okay")
                    return res.json()
                }
                throw new Error('Somethign went wrong')
            })
            .then(post => {
                    console.log("Setting state")
                this.setState({
                    success: true,
                });
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    error: true,
                });
            });

    } 
    
  
    render() {
      let error_text = ""
      if (this.state.success) return <Redirect to="/login" />;
      if (this.state.error) error_text = "Something went wrong with your registration.";
      return (
            <div>
                <div className="d-flex justify-content-center align-items-center login-container">
                   
                    <form className="login-form text-center">
                    
                        <h1 className="mb-5 font-weight-light text-uppercase">Sign Up</h1>

                        <span className="red-text">
                            {error_text}
                        </span>

                        <div className="form-group">
                            <input type="text" 
                            id="email"
                            className="form-control rounded-pill form-control-lg" 
                            onChange={this.onChange}
                            value={this.state.email}
                            placeholder="email address"/>
                        </div>

                        <div className="form-group">
                            <input type="text" 
                            id="username"
                            className="form-control rounded-pill form-control-lg" 
                            onChange={this.onChange}
                            value={this.state.name}
                            placeholder="Username"/>
                        </div>

                        <div className="form-group">
                            <input type="password" 
                            id="password"
                            className="form-control rounded-pill form-control-lg"
                            onChange={this.onChange}
                            value={this.state.password} 
                            placeholder="Password"/>
                        </div>

                        <div className="form-group">
                            <input type="password" 
                            id="password2"
                            className="form-control rounded-pill form-control-lg" 
                            onChange={this.onChange}
                            value={this.state.password2}
                            placeholder="Confirm Password"/>
                        </div>

                        <button onClick={this.onSubmit} className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">Register</button>
                        <p className="mt-3 font-weight-normal">Already have an account? <Link to="/login"><strong>Login</strong></Link></p>
        
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


export default withRouter(SignUpPage);