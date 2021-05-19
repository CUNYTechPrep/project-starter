import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import GroupSearchPage from "./pages/GroupSearchPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignUpPage from "./pages/SignUpPage";
import "./App.css";
import GroupCreationPage from "../src/pages/GroupCreationPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <NavBar /> */}
        <div>
          <Switch>
            <Route path="/aboutUs" component={AboutUsPage} />
            <Route path="/signUp" component={SignUpPage} />
            <Route path="/searchJoin/:email" component={GroupSearchPage} />
            <Route path="/createGroup/:email" component={GroupCreationPage} />
            <Route path="/users/:email" component={ProfilePage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
