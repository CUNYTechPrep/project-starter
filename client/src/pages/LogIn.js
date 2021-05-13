import React from 'react';
import { Redirect } from 'react-router-dom';
import loginFormCSS from './Login.module.css';
import auth from '../services/auth';
import Helmet from 'react-helmet';

function LogInForm(props){
    return(

        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className={loginFormCSS.card}>
                    <div className={loginFormCSS.cardheader}>
                        <h3>Sign In</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={props.onSubmit}>
                            <div className="input-group form-group">
                                <div className={loginFormCSS.input_group_prepend}>
                                    <span className="input-group-text">👤</span>
                                </div>
                                <input type="text" name="userName" className="form-control" placeholder="username"/>
                                
                            </div>
                            <div className="input-group form-group">
                                <div className={loginFormCSS.input_group_prepend}>
                                    <span className="input-group-text">🔑</span>
                                </div>
                                <input type="password" name="password" className="form-control" placeholder="password"/>
                            </div>
                            <div className= {`row align-items-center ${loginFormCSS.remember}`}>
                                <input type="checkbox"/>Remember Me
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Login" className={`btn float-right ${loginFormCSS.login_btn}`}/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer mt-5">
                        <div className={`d-flex justify-content-center ${loginFormCSS.links}`}>
                            Don't have an account?<a href="#">Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
            {props.err}
        </div>


            
    );
}

class LogIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect : false,
            failed : false, 
            userName: "",
            password: ""
        }

    this.handleLogIn = this.handleLogIn.bind(this)
    }

    handleLogIn(e){
        e.preventDefault()
        let user = e.target.userName.value; 
        let pass = e.target.password.value;

        this.setState({
            userName : user,
            password : pass
        })

        auth.authenticate(user, pass)
        .then(user => {
            this.setState({redirect : true})
        })
        .catch(err => {
            this.setState({failed: true})
        })
    }

    render(){
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const redirect = this.state.redirect
        const failed = this.state.failed

        if(redirect){
            return <Redirect to={from}/>
        }

        let error =""
        if(failed){
            error = <div className="alert alert-danger" role="alert">Incorrect username or password.</div> 
        }


        return(
            <div>
                <Helmet>
                    <body className={loginFormCSS.loginBody}/>
                    <html className={loginFormCSS.loginHtml}/>
                </Helmet>
                <LogInForm onSubmit={this.handleLogIn} err={error}/>
            </div>
               
        )
    }
}

export default LogIn;