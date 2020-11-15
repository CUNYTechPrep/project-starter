import React from "react"
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from "react-router-dom"
import AboutUsPage from "./pages/AboutUsPage"
import LandingPage from "./pages/LandingPage"
// fix here

import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import PrivateRoute from "./components/PrivateRoute"
import { Navigation } from "./components/Navigation"
import "./App.css"
import auth from "./services/auth"

class App extends React.Component {
    render() {
        return (
            <Router>
                <Navigation />
                <div className="container-fluid text-center">
                    <div className="row justify-content-center">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() =>
                                    auth.isAuthenticated ? <h1>Home Page</h1> : <LandingPage />
                                }
                            />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/about-us" component={AboutUsPage} />

                            <Route exact path="/signup" component={SignUpPage} />
                            {/* Force nomatch urls redirect to login page */}
                            <Route render={() => <Redirect to="/" />} />
                        </Switch>
                    </div>
                </div>
            </Router>
           
        )
    }
}

export default App
