import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";

import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
