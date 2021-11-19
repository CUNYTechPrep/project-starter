import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const initialValues = {
    email: "",
    password: "",
} 
function Signup(props){
    const [values, setValues] = useState(initialValues);
    const [alert, setAlert] = useState("")
    const [redirect, setRedirect] = useState(false);
    const auth = useContext(AuthContext);
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //authenticate the account
        // if it is authenticated, redirect to home page
        const { email, password } = values;
        auth.signup(email, password)
          .then((user) => {
            setRedirect(true)
          })
          .catch((err) => {
            console.error(err)
            setAlert("User already exists")
          });

    }
    const { from } = props.location.state || { from: { pathname: "/" } }
    if(redirect){
        return <Redirect to={from} />
    }
    return (
        <form onSubmit={handleSubmit} className="loginForm">
            <h3>Sign Up</h3>
            {alert !== "" && (<div className="alert alert-danger" role="alert">
                {alert}
            </div>)}
            <div className="form-group">
                <label>Email address</label>
                <input 
                type="email" 
                className="form-control" 
                placeholder="Enter email" 
                name="email"
                onChange={handleInputChange}
                value={values.email}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                type="password" 
                className="form-control" 
                placeholder="Enter password" 
                name="password"
                onChange={handleInputChange}
                value={values.password}
                />
            </div>

            {/* <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div> */}

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        </form>
    );
}


export default Signup;