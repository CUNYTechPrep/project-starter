import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
//Different pages
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Micro Blog</Link>
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

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange (event) {
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
            <input name="username" type="text" class="form-control" id="inputUsername" placeholder="Enter Username" onChange={this.handleInputChange}/>
          </div>
          <div class="form-group">
            <label for="inputPassword">Password: </label>
            <input name="password" type="password" class="form-control" id="inputPassword" placeholder="Enter Password" onChange={this.handleInputChange}/>
          </div>
          <button type="submit" class="btn btn-primary" onChange={this.handleInputChange}>Submit</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      //enables routing, i.e navigating to different pages on the site
        <Router>
          <div class="container-fluid text-center">
            <div class="row">
              <div class="col-12">
                <h1>Night Out</h1>
                <LoginForm />
              </div>
            </div>
          </div>
          
          {/* <Navigation /> */}
          {/* <div className="container-fluid text-center"> */}
          {/*   <div className="row justify-content-center"> */}
          {/*     <Switch> */}
                {/*Different pages in our site*/}
          {/*       <Route path="/posts/new" component={PostFormPage} /> */}
          {/*       <Route path="/posts/:id" component={ShowPostPage} /> */}
          {/*       <Route path="/about-us" component={AboutUsPage} /> */}
          {/*       <Route path="/" component={PostsListPage} /> */}
          {/*     </Switch> */}
          {/*   </div> */}
          {/* </div> */}
        </Router>
    );
  }
}


export default App;
