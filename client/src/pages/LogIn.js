import React from 'react';
import { Redirect } from 'react-router-dom';
import '../Form.css';

function LogInForm(props){
    return(
        

            <form className="bg-secondary p-5 row g-3" onSubmit={props.onSubmit}>

                <div className="col-md-12">
                <img className="profilePic" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"/>
                </div>

                <div className="col-md-12">
                    <label className="form-label text-warning"> User :</label>
                    <input type="text" name="user" className="form-control" placeholder="Enter Username"/>
                </div>

                <div className="col-md-12">
                    <label className="form-label text-warning"> Password : </label>
                    <input type="text" name="password" className="form-control" placeholder="Enter Password"/>
                </div>

               <div className="form-check form-switch col-md-6">
                    <input className="form-check-input" type="checkbox" id="checkBox"/>
                    <label className="form-check-label text-warning" htmlFor="checkBox">Remember me?</label>
               </div>

                <div className="col-6">
                    <label className="form-label text-warning"> Forgot Password? : </label>
                    <button className="btn btn-light" onClick={props.OnCancle} >Reset Password</button>
                </div>

                <div className="col-12">
                    <input  className="btn btn-primary m-3" type="submit"/>
                    <button className="btn btn-danger m-3" onClick={props.OnCancle} >Cancel</button>
                </div>
            </form>
    );
}

class LogIn extends React.Component {
    render(){
        return(
           <LogInForm/>
        )
    }
}

export default LogIn;