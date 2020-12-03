import React from "react"
import { Redirect, Link } from "react-router-dom"
import "./SignUpPage.css"

import auth from "../services/auth"

class LoginPage extends React.Component {
    state = {
        redirectToReferrer: false,
        failed: false,
        email: "",
        password: "",
    }

    fieldChanged = name => {
        return event => {
            let { value } = event.target
            this.setState({ [name]: value })
        }
    }

    login = e => {
        e.preventDefault()
        let { email, password } = this.state
        auth.authenticate(email, password)
            .then(user => {
                this.setState({ redirectToReferrer: true })
            })
            .catch(err => {
                this.setState({ failed: true })
            })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/profile" } }
        const { redirectToReferrer, failed } = this.state

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        let err = ""
        if (failed) {
            err = (
                <div className="alert alert-danger" role="alert">
                    Login Failed
                </div>
            )
        }

        return (
            <div>
                <div className="container">
                    <h2>Sign In</h2>
                    <form onSubmit={this.login}>
                        <div className={"ui form"}>
                            {err}
                            <div className="field">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.fieldChanged("email")}
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.fieldChanged("password")}
                                />
                            </div>
                            <button type="submit" className={"ui button"} style={{ right: 0 }}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                    No Account? <Link to="/signup">Sign up here</Link>
                </div>
            </div>
        )
    }
}

export default LoginPage
