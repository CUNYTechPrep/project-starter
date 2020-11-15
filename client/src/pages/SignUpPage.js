import React, { useState } from "react"
import Axios from "axios"
import "./SignUpPage.css"
import { useForm } from "react-hook-form"
import auth from "../services/auth"
<<<<<<< HEAD
import {useHistory} from "react-router-dom";
=======
import { Redirect } from "react-router-dom"
>>>>>>> 171b603de1a8e1f932b44d0560d63bf243bc7211

//class SignUpPage extends React.Component
export default function SignUpPage() {
    const [success, setSuccess] = useState(false)

<<<<<<< HEAD
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = (data) =>{
=======
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {
>>>>>>> 171b603de1a8e1f932b44d0560d63bf243bc7211
        Axios.post("/api/auth/signup", {
            email: data.email,
            password: data.password,
        }).then(response => {
            auth.isAuthenticated = true
            setSuccess(true)
        })
    }

    if (success) return <Redirect to="/" />

<<<<<<< HEAD
        return(
            <div className='container'>
                <h2>Create An Account</h2>
=======
    return (
        <div className="container">
            <h3>Create An Account</h3>
>>>>>>> 171b603de1a8e1f932b44d0560d63bf243bc7211
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
    )
}
