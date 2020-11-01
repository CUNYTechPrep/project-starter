import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from '../services/auth';

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
      <form onSubmit={this.login}>
        <div className="form-row">
          { err }
          <input 
            type="email"
            className="form-control"
            name="email"
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.fieldChanged('email')} />
          <input 
            type="password"
            className="form-control"
            name="password"
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.fieldChanged('password')} />
          <button 
            type="submit"
            className="btn btn-primary ml-auto"
          >Login</button>
        </div>
      </form>
    );
  }
}

export default LoginPage;