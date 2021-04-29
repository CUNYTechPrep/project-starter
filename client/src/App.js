import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useHistory,
} from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Review from "./pages/Review";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";
import "./App.css";


// import PostFormPage from "./pages/PostFormPage";
// import ShowPostPage from "./pages/ShowPostPage";

function Navigation(props) {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await logout();
    history.push("/");
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">
        School Finder
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        {currentUser && currentUser.email ? (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Compare Schools
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/review">
                Reviews
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" onClick={handleLogout} exact to="/">
                Logout
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/signup">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item border-white">
              <NavLink className="nav-link" exact to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <PrivateRoute exact path="/profile" component={Profile} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/review" component={Review} />
                <Route path="/" component={PostsListPage} />
                {/* <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} /> */}
              </Switch>
            </div>
          </div>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
