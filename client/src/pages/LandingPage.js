import React from "react";
import { Redirect } from "react-router-dom";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      success: false,
      error: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.email, this.state.password);
    fetch("/api/users/" + this.state.email)
      .then((res) => res.json())
      .then((user) => {
        //console.log(user);
        if (user && user.password === this.state.password) {
          this.setState({
            success: true,
          });
        }
      });
  };
  render() {
    if (this.state.success)
      return <Redirect to={"/users/" + this.state.email} />;

    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-4">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail">Email: </label>
                <input
                  required
                  name="email"
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter Your Email"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password: </label>
                <input
                  required
                  name="password"
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter Password"
                  onChange={this.handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/*Inquiry: onChange on both input fields and submit button*/}
        {/* <h1>{this.state.username}    {this.state.password}</h1> */}
      </div>
    );
  }
}

export default LandingPage;
