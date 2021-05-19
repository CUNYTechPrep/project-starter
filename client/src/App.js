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
import NavBar from "../src/components/NavBar";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route path="/users/:email" component={ProfilePage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
