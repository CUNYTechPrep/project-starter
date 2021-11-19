import React, { useState } from "react";
const initialValues = {
    email: "",
    password: "",
} 
function SignUp(){
    const [values, setValues] = useState(initialValues);
    const [alert, setAlert] = useState("")
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
        fetch("http://localhost:5000/auth/signup", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json'
             },
            body: JSON.stringify(values)
        }).then(res => res.json())
        .then(obj => {
            if(!obj.success){
                setAlert(obj.message)
            }else{
                // setValues(initialValues);
                console.log(obj)
                window.location = `/`
            }
        })
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
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    );
}


export default SignUp;