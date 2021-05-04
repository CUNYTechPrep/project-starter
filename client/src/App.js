import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useHistory,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Review from "./pages/Review";
import Compare from "./pages/Compare";
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
    <nav className="navbar navbar-expand-sm navbar-dark bg-custom shadow navIndex">
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
              <NavLink className="nav-link" exact to="/compare">
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

const App = () => {

    return (
      <Router>
        <AuthProvider>
          <Navigation />
              <Switch>
                <PrivateRoute exact path="/profile" component={Profile} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/review" component={Review} />
                <Route path="/compare" component={Compare} />
                <Route path="/" component={HomePage} />

                {/* <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} /> */}
              </Switch>
        </AuthProvider>
      </Router>
    );
  }


export default App;
