import React from 'react';
import { Redirect } from 'react-router-dom';
import '../Form.css'
import firebase from '../firebase.js';
import SignUpCSS from './Signup.module.css'
import Helmet from 'react-helmet'

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

        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className={SignUpCSS.card}>
                    <div className="card-body">
                        <form onSubmit={props.onSubmit} className="row g-3">
                            <div className="form-group col-md-3">
                            </div>

                            <div className="form-group col-md-6">
                                <h3 className={SignUpCSS.title}>Sign Up</h3>
                                <div className={SignUpCSS.profileDiv}>
                                    <input type="file" name="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} style={{display: "none"}}/>
                                    <div onClick = {()=> imageUploader.current.click()}>
                                    <img ref={uploadedImage} src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" className={SignUpCSS.profilePic} alt=""/> 
                                    </div>
                                    Click to upload profile picture
                                </div>
                            </div>

                            <div className="form-group col-md-3">
                            </div>

                            <div className="input-group form-group col-md-10">
                                <div className={SignUpCSS.input_group_prepend}>
                                    <span className="input-group-text">📧</span>
                                </div>
                                <input type="text" name="email" className="form-control" placeholder="email"/>
                            </div>

                            <div className="input-group form-group col-md-6">
                                <div className={SignUpCSS.input_group_prepend}>
                                    <span className="input-group-text">👤</span>
                                </div>
                                <input type="text" name="userName" className="form-control" placeholder="username"/>
                                
                            </div>

                            <div className="input-group form-group col-md-6">
                                <div className={SignUpCSS.input_group_prepend}>
                                    <span className="input-group-text">🔑</span>
                                </div>
                                <input type="password" name="password" className="form-control" placeholder="password"/>
                            </div>

                            <div className="input-group form-group col-md-4">
                                <div className={SignUpCSS.input_group_prepend}>
                                    <span className="input-group-text">📋</span>
                                </div>
                                <input type="text" name="fName" className="form-control" placeholder="first name"/>
                            </div>

                            <div className="input-group form-group col-md-4">
                                <div className={SignUpCSS.input_group_prepend}>
                                    <span className="input-group-text">📋</span>
                                </div>
                                <input type="text" name="lName" className="form-control" placeholder="last name"/>
                            </div>

                            <div className="input-group form-group col-md-4">
                                <div className={SignUpCSS.input_group_prepend}>
                                    <span className="input-group-text">📅</span>
                                </div>
                                <input name="birthDate" className="form-control" placeholder="" type="date" min="1900-01-01"max={new Date().toISOString().split("T")[0]}/>
                            </div>

                            <div className="form-group col-md-4">
                            </div>

                            <div className="form-group col-md-4">
                                <button className="btn btn-danger m-3" onClick={props.OnCancle} >Cancel</button>
                                <input type="submit" value="Sign Up" className={`btn float-right ${SignUpCSS.signup_btn}`}/>
 
                            </div>

                            <div className="form-group col-md-4">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {props.err}
        </div>
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
        this.handleCancle= this.handleCancle.bind(this);
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
                                this.setState({success: true})
                            }
                        })
                        .catch(error => {
                            console.log('Error', error);
                        });

                    })
            }
        )
    }

    handleCancle(e){
        e.preventDefault();
        this.setState({
            isCancle : true
        })
    }

    render(){
        if(this.state.success) return <Redirect to="/log-in" />;
        if(this.state.isCancle) return  <Redirect to="/" />;
        return (
            <div>
                <Helmet>
                    <body className={SignUpCSS.signupBody}/>
                    <html className={SignUpCSS.signupHtml}/>
                </Helmet>
                <SignUpForm onSubmit ={this.handleSubmit} OnCancle={this.handleCancle}/>
            </div>
            
        )
    }
        
    
}

export default SignUp;