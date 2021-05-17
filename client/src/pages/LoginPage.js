import React from 'react';
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import auth from '../services/auth';

import logo from '../img/dumbbell.png';
import '../App.css';
import '../css/LoginPage.css';


class LoginPage extends React.Component {
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

  login = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    auth.authenticate(email, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
        //localStorage.setItem(auth.isAuthenticated, true);
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
      err = <div className="alert alert-danger" role="alert">Login Failed</div>;
    }

    return (
      <div>
        <form onSubmit={this.login}>
          <div className="div-heading">
            <img className="logo" alt="dumbell-logo" src={logo} />
            <h1>Login to Fitbud!</h1>
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
            <button className="button-login" type="submit">
              Login
            </button>
            <Link to="./sign-up">
              <button className="button-signup" type="button">
                Sign Up
              </button>
            </Link>
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

export default LoginPage; 
// function LoginPage(props) {
//   //Here if user is not registered, I will prompt user to go to SignUpPage.js
//   return (
//     <div>
//       <div className="div-heading">
//         <img className="logo" alt="dumbell-logo" src={logo} />
//         <h1>Login to Fitbud!</h1>
//       </div>

//       <div className="div-background">
//         <form>
//           <input type="text" placeholder="Username"></input>
//           <br></br>
//           <br></br>
//           <input type="text" placeholder="Password"></input>
//           <br></br>
//           <br></br>
//           <button className="button-login" type="submit">
//             Login
//           </button>
          // <Link to="./sign-up">
          //   <button className="button-signup" type="button">
          //     Sign Up
          //   </button>
          // </Link>
//         </form>
//       </div>
      // <div style={{ color: 'gray', paddingTop: 20 }}>OR</div>
      // <div style={{ paddingTop: 20 }}>
      //   <button
      //     style={{ backgroundColor: 'lightgray', borderRadius: 5
      //     , marginBottom: 40  }}
      //     type="submit"
      //   >
      //     Sign in with <span className="blue">G</span>
      //     <span className="red">o</span>
      //     <span className="yellow">o</span>
      //     <span className="blue">g</span>
      //     <span className="green">l</span>
      //     <span className="red">e</span>
      //   </button>
      // </div>
      // <div style={{float: "right", color: "#979797",
      //   marginBottom: 10}}>
      //   @Fitbud
      // </div>
//     </div>
//   );
// }

// export default LoginPage;
