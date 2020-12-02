import React from "react"
import "./ProfilePage.css"
import Tag from "../components/Tag"
import profile from "../services/profile"
import Loading from "../components/Loading"
import { Redirect } from "react-router-dom"
import axios from "axios"
import auth from "../services/auth" // replace with js-cookie or react-cookie
import Header3 from "../components/Header3"
import headshot from './Images/profile-picture.png';
class ProfilePage extends React.Component {
    // get profile from http://localhost:8080/api/profile

    state = {
        loading: true,
        profile: null,
        notFound: false,
    }

    async componentDidMount() {
        const profile = (await axios.get("/api/profile")).data
        this.setState({ profile, loading: false })
        console.log(profile)
    }

    handleClick = e => {
        auth.profile = this.state.profile
        this.props.history.push("/profile-edit")
    }

    render() {
        if (this.state.loading) return <Loading />
        return (
            <div className="profile">
                <div class="ui grid">
                <div class="three wide column">
                <img src={headshot}  style={{width: "100px"}} />
                </div>
                <div class="thirteen wide column" style={{marginTop: "10px"}}>
                    <Header3
                    headerName={` ${this.state.profile.firstName} ${this.state.profile.lastName}`}
                    />
                    <div> {this.state.profile.school} </div>
                    <div style={{color: "#696969"}}> {`Bachelor in ${this.state.profile.major}`} </div>
                    <div style={{color: "grey"}}> {`Class of ${this.state.profile.graduate_date}`} </div>


                </div>
                
                </div>

                <hr style={{ borderColor: "rgba(0.1, 0.1, 0, 0.1)" }} />
                <Header3 headerName="About" />
                {this.state.profile.bio}
                <hr style={{ borderColor: "rgba(0.1, 0.1, 0, 0.1)" }} />
                <Header3 headerName="Classes" />
                <Tag classes={this.state.profile.coursesTaken.map(course => course.label)} />
                <hr style={{ borderColor: "rgba(0.1, 0.1, 0, 0.1)" }} />
                <Header3 headerName="Interests" />
                <Tag  classes={["Hiking", "Reading", "Investing"]} />
                <br/>
                <button onClick={this.handleClick} className="positive ui button">
                    Edit Profile
                </button>
            </div>
        )
    }
}

export default ProfilePage
