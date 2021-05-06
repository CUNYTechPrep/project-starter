import React from 'react';
import { Redirect } from 'react-router-dom';
import '../Form.css'
import firebase from '../firebase.js';

const bucket = firebase.storage();

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
                <input type="file" name="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} style={{display: "none"}}/>
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
                <input type="text" name="userName" className="form-control" placeholder="Enter User"/>
            </div>


            <div className="col-md-12">
                <label className="form-label text-warning"> Password : </label>
                <input type="text" name="password" className="form-control" placeholder="Enter Password"/>
            </div>

            <div className="col-md-5">
                <label className="form-label text-warning"> First Name : </label>
                <input type="text" name="fName" className="form-control" placeholder="Enter First Name"/>
            </div>

            <div className="col-md-5">
                <label className="form-label text-warning"> Last Name : </label>
                <input type="text" name="lName" className="form-control" placeholder="Enter Last Name"/>
            </div>

            <div className="col-2">
                <label className="form-label text-warning"> Birth Date : </label>
                <input name="birthDate" className="form-control" placeholder="" type="date" min="1900-01-01"max={new Date().toISOString().split("T")[0]}/>
            </div>

            <div className="col-12">
                <input  className="btn btn-primary m-3" type="submit" value="Sign Up"/>
                <button className="btn btn-danger m-3" onClick={props.OnCancle} >Cancel</button>
            </div>


        </form>
    );
}

class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            isCancle : false,
            success : false,
            dataObj :
            { email: " ",
              userName: " ",
              password: " ",
              fName: " ",
              lName: " ",
              birthDate: " ",
              profilePic: "",
              status: true    
            } 
        }

        this.handleSubmit= this.handleSubmit.bind(this);
    }

    
    handleSubmit(e){
        e.preventDefault();
        let email = e.target.email.value;
        let userName = e.target.userName.value;
        let password = e.target.password.value;
        let fName = e.target.fName.value;
        let lName = e.target.lName.value;
        let birthDate = e.target.birthDate.value;
        let file = e.target.file.files[0];

        

        const uploadTask = bucket.ref(`images/${file.name}`).put(file);

        uploadTask.on(
            "state_changed",
            snapshot =>{},
            error =>{
                console.log(error);
            },
            () => {
                bucket
                    .ref("images")
                    .child(file.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log("Url:", url);

                        this.setState(prevState => {
                            let dataObj = { ...prevState.dataObj };
                            dataObj.email = email;
                            dataObj.userName = userName;
                            dataObj.password = password;
                            dataObj.fName = fName;
                            dataObj.lName = lName;
                            dataObj.birthDate = birthDate;
                            dataObj.profilePic = url;
                            return {dataObj}
                        })

                        // console.log(this.state.dataObj);

                        fetch('/api/user', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(this.state.dataObj),
                        })
                        .then(response => {
                            if(response.ok){
                                console.log("success")
                            }
                        })
                        .catch(error => {
                            console.log('Error', error);
                        });

                    })
            }
        )
    }

    render(){
        return (
            <SignUpForm onSubmit ={this.handleSubmit}/>
        )
    }
        
    
}

export default SignUp;