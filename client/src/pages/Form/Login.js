import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import cookie from "react-cookies";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      success: false,
      username: "",
      password: "",
      token: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    // console.log(userData);

    fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(res => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
        throw new Error("Login Validation");
      })
      .then(data => {
        console.log(data);
        this.setState({
          success: true,
          token: data.token
        });
        cookie.save("token", this.state.token);
        cookie.save("username", this.state.username);
        
        window.location.reload()
        // console.log("username = " + cookie.load('username'))
        // console.log("token = " + cookie.load('token'))
      })
      .catch(err => {
        this.setState({
          error: true
        });
        console.log(err);
      });
  }

  render() {
    let errorMessage = null;
    if (this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">"Wrong Username or Password"</div>
      );
    }

    return (
      <Container component="main" maxWidth="xs">
        <h3>Please enter the following information to Signup an account</h3>
        {this.state.success && <Redirect to="/" />}
        {errorMessage}
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="username"
            name="username"
            fullWidth
            margin="normal"
            type="text"
            required
            onChange={this.handleChange}
            variant="outlined"
          />
          <TextField
            label="password"
            name="password"
            fullWidth
            margin="normal"
            type="text"
            required
            onChange={this.handleChange}
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            size="small"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    );
  }
}

export default Login;
