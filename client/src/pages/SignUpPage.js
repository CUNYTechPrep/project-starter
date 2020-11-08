import React from 'react';
import './SignUpPage.css';
import {useForm} from 'react-hook-form';
//class SignUpPage extends React.Component
export default function SignUpPage(){

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) =>{
        console.log(data)
    }


        return(
            <div className='container'>
                <h1>Create An Account</h1>
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
                          message: "invalid email address"
                        }
                      })}
                />
                {errors.email && <p>{errors.email.message}</p>}


            </div>
            <div className="field">
                <label>password:</label>
                <input 
                    type="password"
                    name="password" 
                    placeholder="Password" 
                    ref={register({required: "Password Required", minLength: {value: 8, message: 'Too short'}})}/>
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            

                <button className={"ui button"} type="submit">Submit</button>
            </form>
            </div>
            );

}

