import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/dumbbell.png';
import '../App.css';

function LoginPage(props) {
  //Here if user is not registered, I will prompt user to go to SignUpPage.js
  return (
    <div>
      <div className="div-heading">
        <img className="logo" alt="dumbell-logo" src={logo} />
        <h1>Login to Fitbud!</h1>
      </div>

      <div className="div-background">
        <form>
          <input type="text" placeholder="Username"></input>
          <br></br>
          <br></br>
          <input type="text" placeholder="Password"></input>
          <br></br>
          <br></br>
          <button className="button-login" type="submit">
            Login
          </button>
          <Link to="./sign-up">
            <button className="button-signup" type="button">
              Sign Up
            </button>
          </Link>
        </form>
      </div>
      <div style={{ color: 'gray', paddingTop: 20 }}>OR</div>
      <div style={{ paddingTop: 20 }}>
        <button
          style={{ backgroundColor: 'lightgray', borderRadius: 5 }}
          type="submit"
        >
          Sign in with <span className="blue">G</span>
          <span className="red">o</span>
          <span className="yellow">o</span>
          <span className="blue">g</span>
          <span className="green">l</span>
          <span className="red">e</span>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
