import React from "react"
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"
import AboutUsPage from "./pages/AboutUsPage"
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
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
                            <Route path="/login" component={LoginPage} />
                            <Route
                                path="/"
                                render={() =>
                                    auth.isAuthenticated ? <HomePage /> : <LandingPage />
                                }
                            />
                            <Route path="/about-us" component={AboutUsPage} />
                            <Route path="/home" component={HomePage} />
                            <Route path="/signup" component={SignUpPage} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App
