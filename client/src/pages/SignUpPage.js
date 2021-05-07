
import React from 'react';
// import { Link } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import auth from '../services/auth';

import logo from '../img/dumbbell.png';
import '../App.css';
import '../css/LoginPage.css';


class SignUpPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false, 
    email: "",
    password: "",
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  signup = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    auth.register(email, password) //we created an auth function called register
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger" role="alert">SignUp Failed</div>;
    }

    return (
      <div>
        <form onSubmit={this.signup}>
          <div className="div-heading">
            <img className="logo" alt="dumbell-logo" src={logo} />
            <h1>Sign Up to Fitbud!</h1>
          </div>
          <div className="div-background">
            { err }
            <input 
              type="email"
              className="form-control"
              name="email"
              placeholder="Email" 
              value={this.state.email} 
              onChange={this.fieldChanged('email')} />
              <br></br>
            <input 
              type="password"
              className="form-control"
              name="password"
              placeholder="Password" 
              value={this.state.password} 
              onChange={this.fieldChanged('password')} />
              <br></br>
            <button className="button-signup-only" type="submit">
              Sign Up
            </button>
          </div>
        </form>
          <div style={{float: "right", color: "#979797",
            marginBottom: 10}}>
            @Fitbud
          </div>
      </div>
    );
  }
}

export default SignUpPage; 

// function SignUpPage(props) {
//   return (
//     <div>
//       <div className="div-heading">
//         <img className="logo" alt="dumbell-logo" src={logo} />
//         <h1>Sign Up for Fitbud!</h1>
//       </div>

//       <div className="div-background">
//         <form>
//           <input type="text" placeholder="Username"></input>
//           <br></br>
//           <br></br>
//           <input type="text" placeholder="Password"></input>
//           <br></br>
//           <br></br>
//           <button className="button-signup-only" type="button">
//             Sign Up
//           </button>
//         </form>
//       </div>
//       <div style={{float: "right", color: "#979797",
//         marginBottom: 10}}>
//         @Fitbud
//       </div>
//     </div>
//   );
// }

// export default SignUpPage;
