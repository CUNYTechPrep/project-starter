import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";

import "./App.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        {/*Inquiry: onChange on both input fields and submit button*/}
        {/* <h1>{this.state.username}    {this.state.password}</h1> */}
        <form>
          <div class="form-group">
            <label for="inputUsername">Username: </label>
            <input
              required
              name="username"
              type="text"
              class="form-control"
              id="inputUsername"
              placeholder="Enter Username"
              onChange={this.handleInputChange}
            />
          </div>
          <div class="form-group">
            <label for="inputPassword">Password: </label>
            <input
              required
              name="password"
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Enter Password"
              onChange={this.handleInputChange}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onChange={this.handleInputChange}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">
        Micro Blog
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <Navigation /> */}
        <div className="container-fluid text-center">
          <h1>Night Out</h1>
          <div className="row justify-content-center">
            <Switch>
              {/* <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} /> */}
              <Route path="/" component={LoginForm} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
