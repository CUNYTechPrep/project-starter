import React, { useState } from "react"
import Axios from "axios"
import "./SignUpPage.css"
import { useForm } from "react-hook-form"
import auth from "../services/auth"
import { Redirect, Link } from "react-router-dom"


//class SignUpPage extends React.Component
export default function SignUpPage() {
    const [success, setSuccess] = useState(false)

    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {
        Axios.post("/api/auth/signup", {
            email: data.email,
            password: data.password,
        })
            .then(response => {
                auth.isAuthenticated = true
                setSuccess(true)
            })
            .catch(err => {
                console.log(1234)
            })
    }

    if (success) return <Redirect to="/" />

        return(
            <div>
            <div className='container'>
                <h2>Create An Account</h2>
            <form className={"ui form"} onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        ref={register({
                            required: "Email Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                </div>
                <div className="field">
                    <label>password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        ref={register({
                            required: "Password Required",
                            minLength: { value: 8, message: "Too short" },
                        })}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                </div>
                <button className={"ui button"} type="submit">
                    Submit
                </button>
            </form>
            </div>
            <div style={{textAlign: "center", marginTop: "10px"}}>Already have account? <Link to="/login">Login here</Link></div>
            </div>
  
    )
}
