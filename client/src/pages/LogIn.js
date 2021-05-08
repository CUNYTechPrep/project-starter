import React from 'react';
import { Redirect } from 'react-router-dom';
import '../Form.css';

import auth from '../services/auth';

function LogInForm(props){
    return(
        

            <form className="bg-secondary p-5 row g-3" onSubmit={props.onSubmit}>

                <div className="col-md-12">
                <img className="profilePic" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"/>
                </div>
                {props.err}
                <div className="col-md-12">
                    <label className="form-label text-warning"> Username</label>
                    <input type="text" name="userName" className="form-control" placeholder="Enter Username"/>
                </div>

                <div className="col-md-12">
                    <label className="form-label text-warning"> Password</label>
                    <input type="text" name="password" className="form-control" placeholder="Enter Password"/>
                </div>

               <div className="form-check form-switch col-md-6">
                    <input className="form-check-input" type="checkbox" id="checkBox"/>
                    <label className="form-check-label text-warning" htmlFor="checkBox">Remember me?</label>
               </div>

                <div className="col-6">
                    <label className="form-label text-warning"> Forgot Password?</label>
                    <button className="btn btn-light" onClick={props.OnCancle} >Reset Password</button>
                </div>

                <div className="col-12">
                    <input  className="btn btn-primary m-3" type="submit" value="Log In"/>
                    <button className="btn btn-danger m-3" onClick={props.OnCancle} >Cancel</button>
                </div>
            </form>
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
           <LogInForm onSubmit={this.handleLogIn} err={error}/>
        )
    }
}

export default LogIn;