import React from "react";
import { Redirect } from "react-router-dom";
import LandingNav from "../components/LandingNav";

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
    fetch("/api/users/" + this.state.email)
      .then((res) => res.json())
      .then((user) => {
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
      <>
        <LandingNav />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="login_form">
              <div className="text-center">
                <p>Welcome to Night Out!</p>
                <p>Please Login or ***Sign-Up***</p>
              </div>
              <form>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail"
                    className="col-form-label col-sm-4 col-lg-4"
                  >
                    Email:{" "}
                  </label>
                  <div className="col-lg-8 col-sm-8">
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
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword"
                    className="col-form-label col-sm-4 col-lg-4"
                  >
                    Password:{" "}
                  </label>
                  <div className="col-lg-8 col-sm-8">
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
                </div>
                <div className="d-flex form-group row justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
