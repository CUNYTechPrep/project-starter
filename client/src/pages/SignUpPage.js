import React from 'react';
// import { Link } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import auth from '../services/auth';

import logo from '../img/FBlogo.png';
import '../App.css';
import '../css/LoginPage.css';
//import { Dropdown } from 'bootstrap';

class SignUpPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: 0,
    gender: '',
    fitLevel: '',
    height: 0,
    weight: 0,
    bio: '',
    // city: '',
    // state: '',
    // zipCode: 0,
  };

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    };
  };

  signup = (e) => {
    e.preventDefault();
    let {
      firstName,
      lastName,
      email,
      password,
      age,
      gender,
      fitLevel,
      height,
      weight,
      bio,
      // city,
      // state,
      // zipCode,
    } = this.state;
    auth
      .register(
        firstName,
        lastName,
        email,
        password,
        age,
        gender,
        fitLevel,
        height,
        weight,
        bio
        // city,
        // state,
        // zipCode
      ) //we created an auth function called register
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = '';
    if (failed) {
      err = (
        <div className='alert alert-danger' role='alert'>
          SignUp Failed
        </div>
      );
    }

    return (
      <div>
        <form onSubmit={this.signup}>
          <div className='div-heading'>
            <img className='logo' alt='dumbell-logo' src={logo} />
            <h1>Sign Up to Fitbud!</h1>
          </div>
          <div className='div-background'>
            {err}
            <input
              type='firstName'
              className='form-control'
              name='firstName'
              placeholder='First Name'
              value={this.state.firstName}
              onChange={this.fieldChanged('firstName')}
            />
            <br></br>

            <input
              type='lastName'
              className='form-control'
              name='lastName'
              placeholder='Last Name'
              value={this.state.lastName}
              onChange={this.fieldChanged('lastName')}
            />
            <br></br>

            <input
              type='email'
              className='form-control'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.fieldChanged('email')}
            />
            <br></br>

            <input
              type='password'
              className='form-control'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.fieldChanged('password')}
            />
            <br></br>

            <input
              type='age'
              className='form-control'
              name='age'
              placeholder='Type your Age'
              value={this.state.age}
              onChange={this.fieldChanged('age')}
            />
            <br></br>

            <input
              type='gender'
              className='form-control'
              name='gender'
              placeholder='Type your Gender'
              value={this.state.gender}
              onChange={this.fieldChanged('gender')}
            />
            <br></br>
            {/* 
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                FitLevel
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Beginner</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Mid</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Pro</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

            <input
              type='fitLevel'
              className='form-control rounded'
              name='fitLevel'
              placeholder='Type your Fit Level'
              value={this.state.fitLevel}
              onChange={this.fieldChanged('fitLevel')}
            />
            <br></br>

            <input
              type='height'
              className='form-control'
              name='height'
              placeholder='Type your Height'
              value={this.state.height}
              onChange={this.fieldChanged('height')}
            />
            <br></br>

            <input
              type='weight'
              className='form-control'
              name='weight'
              placeholder='Type your Weight'
              value={this.state.weight}
              onChange={this.fieldChanged('weight')}
            />
            <br></br>

            {/* <input
              type='city'
              className='form-control'
              name='city'
              placeholder="Type your city's name"
              value={this.state.city}
              onChange={this.fieldChanged('city')}
            />
            <br></br>

            <input
              type='state'
              className='form-control'
              name='state'
              placeholder="Type your state's name"
              value={this.state.state}
              onChange={this.fieldChanged('state')}
            />
            <br></br>

            <input
              type='zipCode'
              className='form-control'
              name='zipCode'
              placeholder='Type your zip code'
              value={this.state.zipCode}
              onChange={this.fieldChanged('zipCode')}
            />
            <br></br> */}

            <button className='button-signup-only' type='submit'>
              Sign Up
            </button>
          </div>
        </form>
        <div style={{ float: 'right', color: '#979797', marginBottom: 10 }}>
          @Fitbud
        </div>
      </div>
    );
  }
}

export default SignUpPage;
