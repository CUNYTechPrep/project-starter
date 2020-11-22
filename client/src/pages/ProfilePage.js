import React from 'react'
import './ProfilePage.css';
import Tag from '../components/Tag';
import profile from "../services/profile"
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';
import auth from '../services/auth'; // replace with js-cookie or react-cookie


class ProfilePage extends React.Component{
    // get profile from http://localhost:8080/api/profile

    state = {
        loading: true,
        profile: null,
        notFound: false,
    }
    // state= {
    //     name: "Sett Hein",
    //     school: "Baruch College",
    //     year: "Class of 2020",
    //     major: "Bachelor's in Computer Information Systems",
    //     classes: [
    //         "CIS 3100", "MTH 4300", "ENG 31000", "CIS 4400"
    //     ],
    //     bio: "I am a senior studying Computer Information Systems at Baruch College. I am also a Software Engineering fellow at CTP where I am learning full-stack Javascript. I love to play sports but very injury-prone",
    // }


    // login = e => {
    //     e.preventDefault()
    //     let { email, password } = this.state
        
    //     profile.getProfile(email, password)
    //         .then(userProfile => {
    //         console.log("user profile", userProfile);
    //         //state= userProfile;
    //         this.setState({ redirectToReferrer: true })
    //     })
    //     .catch(err => {
    //         this.setState({ failed: true })
    //     })
    // } 


    componentDidMount() {
        let email = ""; 
        if (auth.isAuthenticated === true){
                email = auth.user; // or figure out how to get user from the cookie. maybe libary or package, 
                // https://stackoverflow.com/questions/51109559/get-cookie-with-react
        }
    
        fetch("/api/profile?email="+email)
          .then(res => res.json())
          .then(userprofile => {
            this.setState({
             profile: {...userprofile},
              loading: false,
            });
          })
          .catch(err => {
            this.setState({
              notFound: true,
            });
          });
    }
    
   
    handleClick = e =>{
        this.props.history.push('/profile-edit');
    };

    render(){
        // if(this.state.notFound) return <Redirect to="/" />;
        if(this.state.loading) return <Loading />;
        return(
            <div className="profile">
                <h3>{this.state.profile.firstName}</h3>
                <br />
                {this.state.profile.lastName}
                <br />
                {this.state.profile.major}
                <hr />
                <h3>About</h3>
                {this.state.profile.bio}
                <hr />

                <h3>Classes</h3>
                <Tag classes = {this.state.classes}/>
                <button onClick={this.handleClick} className="positive ui button">Edit Profile</button>


            </div>
        )

        //return JSON.stringify(this.state.profile.firstName);
    }
}



export default ProfilePage;