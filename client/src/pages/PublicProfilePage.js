import React, { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Header3 from "../components/Header3"
import headshot from "./Images/profile-picture.png"
import Tag from "../components/Tag"
import { SocialIcon } from "react-social-icons"
import MatchBox from "../components/MatchBox"
import Loading from "../components/Loading"
import auth from "../services/auth"

export default function PublicProfilePage() {
    const { id } = useParams()
    const [profile, setProfile] = useState()
    const [pendingState, setPendingState] = useState()
    const [recommendation, setRecommendation] = useState([
        {
            name: "John Cena",
            college: "Queens College",
            major: "Computer Science",
            courses: ["Software Engineer at Google"],
            pic: `https://randomuser.me/api/portraits/med/men/10.jpg`,
        },
        {
            name: "Eli Wong",
            college: "Queens College",
            major: "Computer Science",
            courses: ["Software Engineer at Facebook"],
            pic: `https://randomuser.me/api/portraits/med/women/4.jpg`,
        },
        {
            name: "Amir Khan",
            college: "Queens College",
            major: "Computer Science",
            courses: ["Software Engineer at Facebook"],
            pic: `https://randomuser.me/api/portraits/med/men/1.jpg`,
        },
        {
            name: "Jonathan Cruz",
            college: "Queens College",
            major: "Computer Science",
            courses: ["Software Engineer at Facebook"],
            pic: `https://randomuser.me/api/portraits/med/men/2.jpg`,
        },
    ])

    const connectRef = useRef()

    useEffect(() => {
        const fetchData = async () => {
            const [profileResponse, friendResponse] = await Promise.all([
                axios.get(`/api/profile/${id}`),
                axios.get(`/api/friend/${id}`),
            ])

            setProfile(profileResponse.data)
            setPendingState(friendResponse.data.pendingState)
        }

        fetchData()
    }, [])

    useEffect(() => {
        switch (pendingState) {
            case 1:
                connectRef.current.classList.toggle("disabled")
                connectRef.current.textContent = "Requested"
                break

            case 2:
                connectRef.current.textContent = "Connect Back"
                break
            case 3:
                connectRef.current.classList.toggle("disabled")
                connectRef.current.textContent = "Connected"
                break

            default:
        }
    }, [pendingState])

    if (!profile) return <Loading />

    const connect = async e => {
        const buttonClasses = e.target.classList
        buttonClasses.toggle("loading")

        const response = await axios.post("/api/friend", { id })

        const { pendingState } = response.data

        if (pendingState === 3) auth.chat[id] = []

        buttonClasses.toggle("loading")
        setPendingState(pendingState)
    }

    // ----------------------------------------------------------------
    return (
        <div className="publicProfile">
            <div className="profile">
                <div className="ui grid">
                    <div className="three wide column">
                        {/* <img src={headshot} style={{ width: "100px" }} alt="headshot" /> */}
                        <img
                            className="ui medium circular image"
                            src={profile.pic}
                            style={{ width: "100px" }}
                            alt="headshot"
                        />
                    </div>
                    <div className="ten wide column" style={{ marginTop: "10px" }}>
                        <Header3 headerName={` ${profile.firstName} ${profile.lastName}`} />
                        <div> {profile.school} </div>
                        <div style={{ color: "#696969" }}> {`Bachelor in ${profile.major}`} </div>
                        <div style={{ color: "grey" }}> {`Class of ${profile.graduate_date}`} </div>
                    </div>
                    <div className="three wide column">
                        <button ref={connectRef} className="ui green button" onClick={connect}>
                            Connect
                        </button>
                    </div>
                </div>
                <hr style={{ borderColor: "rgba(0.1, 0.1, 0, 0.1)" }} />
                <Header3 headerName="About" />
                {profile.bio}
                <hr style={{ borderColor: "rgba(0.1, 0.1, 0, 0.1)" }} />
                <Header3 headerName="Classes" />
                <Tag classes={profile.coursesTaken?.map(c => c.label)} />
                <hr style={{ borderColor: "rgba(0.1, 0.1, 0, 0.1)" }} />
                <Header3 headerName="What are your Goals?" />
                <Tag classes={["Study Buddies", "Mentorship"]} />
                <hr style={{ borderColor: "rgba(0.1, 0.1, 0, 0.1)" }} />
                <Header3 headerName="Interests" />
                <Tag classes={["Hiking", "Reading", "Investing"]} />
                <hr style={{ borderColor: "rgba(0.1, 0.1, 0, 0.1)" }} />

                <Header3 headerName="Contact" />
                <SocialIcon
                    url="https://www.linkedin.com/in/sett-hein/"
                    style={{ height: 25, width: 25 }}
                />
                <br />
                <br />
            </div>
            <div className="MatchPage" style={{ marginBottom: "40px" }}>
                <h3>{`Similar to ${profile.firstName} ${profile.lastName}`}</h3>
                <div className="ui four cards">
                    {recommendation?.map((match, index) => (
                        <MatchBox key={index} {...match} />
                    ))}
                </div>
            </div>
        </div>
    )
}
