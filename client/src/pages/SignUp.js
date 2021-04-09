import React from 'react';
import { Redirect } from 'react-router-dom';
import '../Form.css'

function SignUpForm(props) {

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
            current.src = e.target.result;
        };
        reader.readAsDataURL(file);
        }
    };

    return (
        <form className="bg-secondary p-5 row g-3" onSubmit={props.onSubmit}>
            <div className="col-12">
                <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} style={{display: "none"}}/>
                <div onClick = {()=> imageUploader.current.click()}>
                    <img ref={uploadedImage} src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" className="profilePic"/> 
                </div>
                Click to upload profile picture
            </div>

            <div className="col-md-12">
                <label className="form-label text-warning float-start"> Email :</label>
                <input type="text" name="email" className="form-control" placeholder="Enter Email"/>
            </div>

            <div className="col-md-12">
                <label className="form-label text-warning"> User : </label>
                <input type="text" name="user" className="form-control" placeholder="Enter User"/>
            </div>


            <div className="col-md-12">
                <label className="form-label text-warning"> Password : </label>
                <input type="text" name="password" className="form-control" placeholder="Enter Password"/>
            </div>

            <div className="col-md-5">
                <label className="form-label text-warning"> First Name : </label>
                <input type="text" name="firstName" className="form-control" placeholder="Enter First Name"/>
            </div>

            <div className="col-md-5">
                <label className="form-label text-warning"> Last Name : </label>
                <input type="text" name="lastName" className="form-control" placeholder="Enter Last Name"/>
            </div>
            

            <div className="col-2">
                <label className="form-label text-warning"> Zip Code : </label>
                <input name="zipCode" className="form-control" placeholder="Enter Zip Code"/>
            </div>

            <div className="col-6">
                <label className="form-label text-warning"> Birth Date : </label>
                <input name="dateOfBirth" className="form-control" placeholder="" type="date" min="1900-01-01"max={new Date().toISOString().split("T")[0]}/>
            </div>

            <div className="col-12">
                <input  className="btn btn-primary m-3" type="submit" value="Sign Up"/>
                <button className="btn btn-danger m-3" onClick={props.OnCancle} >Cancel</button>
            </div>


        </form>
    );
}

class SignUp extends React.Component {

    render(){
        return (
            <SignUpForm/>
        )
    }
        
    
}

export default SignUp;