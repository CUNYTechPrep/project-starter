import React from 'react';
import './signup.css';
import { AuthContext } from '../context/AuthContext';
import { Redirect } from 'react-router-dom';
class SignUp extends React.Component{
    state={
        email:'',
        password:'',
        fname:'',
        lname:'',
        username:'',
    }

    // handleChange = (e) =>{
    //     const {name,value} = e.target
    //     this.setState({[name]:value})
    // }

    fieldChanged = (name) => {
        return (event) => {
          let { value } = event.target;
          this.setState({ [name]: value });
        }
      }


    //on submit
    signup = (e) =>{
        e.preventDefault();
        const auth = this.context;
        let { email, password } = this.state;
        auth.authenticate(email, password)
          .then((user) => {
            this.setState({ redirectToReferrer: true });
          })
          .catch((err) => {
            this.setState({ failed: true });
          });
    }
    render(){
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger" role="alert">Login Failed</div>;
    }
        return(
            <div className='div-signup'>
                {err}
                <div>
                    <form onSubmit={this.signup}>
                        <p className="header-font">Hobbies Hubs</p>
                        <input className='input' type='fname' name='fname' placeholder='First Name' required onChange={this.fieldChanged('fname')}/>
                        <input className='input' type='lname' name='lname' placeholder='Last Name' required onChange={this.fieldChanged('lname')}/>
                        <input className='input' type='email' name='email' placeholder='Email' required onChange={this.fieldChanged('email')}/>
                        <input className='input' type='uemail' name='username' placeholder='Username' required onChange={this.fieldChanged('username')}/>
                        <input className='input' type='password' name='password' placeholder='Password' required onChange={this.fieldChanged('password')}/>
                        <p className="hobby-option">Choose a Hobby</p>
                        <div className="hobbies">
                        <button className='button' onSubmit={this.handleSubmit}>Art</button>
                        <button className='button' onSubmit={this.handleSubmit}>Interior Design</button>
                        </div>
                        <div className="list">
                        <input className='list' type='checkbox' name='checkbox' value='I have a bike'/>
                        <p>I have a bike</p>
                        </div>
                        <button className='button' onSubmit={this.handleSubmit}>Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
SignUp.contextType = AuthContext
export default SignUp;