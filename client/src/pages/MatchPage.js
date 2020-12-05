import React, { useState, useEffect } from "react"
import MatchBox from "../components/MatchBox"
import axios from "axios"
import "./MatchPage.css"
import ProfileEditPage from "./ProfileEditPage"

export default function MatchPage() {
    const [matches, setMatches] = useState([])
    const [profilePic, setProfilePic] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/match")
            setMatches(response.data)
            const pic = await axios.get("https://randomuser.me/api/?results=4")
            setProfilePic(pic.data.results[0].picture.medium)
        }
        fetchData()
    }, [])



    return (
        <div className="MatchPage">
            <div className="ui four cards">
                {matches.map((match, index) => (
                    <MatchBox key={index} {...match} pic = {profilePic}/>
                ))}
            </div>
            
        </div>
    )
}
