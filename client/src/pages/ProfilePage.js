import React from "react"
import "./ProfilePage.css"
import Tag from "../components/Tag"
import profile from "../services/profile"
import Loading from "../components/Loading"
import { Redirect } from "react-router-dom"
import axios from "axios"
import auth from "../services/auth" // replace with js-cookie or react-cookie

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
                <h3>{` ${this.state.profile.firstName} ${this.state.profile.lastName}`}</h3>
                <p> {this.state.profile.school} </p>

                <p> {this.state.profile.major} </p>
                <h3>About</h3>
                {this.state.profile.bio}

                <h3>Classes</h3>
                <Tag classes={this.state.profile.coursesTaken} />
                <button onClick={this.handleClick} className="positive ui button">
                    Edit Profile
                </button>
            </div>
        )
    }
}

export default ProfilePage
