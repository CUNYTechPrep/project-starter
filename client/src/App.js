import React from "react"
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"

import MessagePage from './pages/MessagePage';
import MatchPage from './pages/MatchPage';
import ProfilePage from './pages/ProfilePage';
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
                                    auth.isAuthenticated ? <div>Hello</div>: <LandingPage />
                                }
                            />
                            <Route exact  path="/login" component={LoginPage} />
                            <Route exact path="/signup" component={SignUpPage} />
                            {/* Force nomatch urls redirect to login page */}
                            <PrivateRoute  exact path = '/profile' component={ProfilePage} />
                            <PrivateRoute exact path = '/match' component={MatchPage} />
                            <PrivateRoute exact path = '/message' component={MessagePage} />

                            <Route render={() => <Redirect to="/" />} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App
