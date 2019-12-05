import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        error: false,
        success: false,
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        school: "Baruch College",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const userData = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        school: this.state.school,
    };

    // console.log(userData)

    fetch("/api/signup", {
      method: "POST",
      credentials: "include",
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
        throw new Error("Signup Validation");
      })
      .then(data => {
        console.log("data is " + data);
        this.setState({
          success: true
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
        console.log("error is " + err);
      });
  }

  render() {
    let errorMessage = null;
    if (this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "This email or username has already been taken"
        </div>
      );
    }

    return (
        <Container component="main" maxWidth="xs">
        <h3>Please enter the following information to Signup an account</h3>
        {this.state.success && <Redirect to="/login" />}
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
            inputProps={{ minLength: 5, maxLength: 10 }}
            required
            onChange={this.handleChange}
            variant="outlined"
          />
          <TextField
            label="email"
            name="email"
            fullWidth
            margin="normal"
            type="text"
            required
            onChange={this.handleChange}
            variant="outlined"
          />
          <TextField
            label="first name"
            name="firstName"
            fullWidth
            margin="normal"
            type="text"
            required
            onChange={this.handleChange}
            variant="outlined"
          />
          <TextField
            label="last name"
            name="lastName"
            fullWidth
            margin="normal"
            type="text"
            required
            onChange={this.handleChange}
            variant="outlined"
          />
          <label>
            Choose a School
            <select name="category" value={this.state.category} onChange={this.handleChange}>
              <option disabled>Please choose one of the following</option>
              <option value="Baruch College">Baruch College</option>
              <option value="Brooklyn College">Brooklyn College</option>
              <option value="College of Staten Island">College of Staten Island</option>
              <option value="Hunter College">Hunter College</option>
              <option value="John Jay College Of Criminal Justice">John Jay College Of Criminal Justice</option>
              <option value="Lehman College">Lehman College</option>
              <option value="Medgar Evers College">Medgar Evers College</option>
              <option value="New York City College Of Technology">New York City College Of Technology</option>
              <option value="Queens College">Queens College</option>
              <option value="The City College Of New York">The City College Of New York</option>
              <option value="York College">York College</option>
              <option value="other">Others</option>
            </select>
          </label>
          <Button
            type="submit"
            fullWidth
            size="small"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
        </form>
      </Container>
    );
  }
}

export default Signup;
