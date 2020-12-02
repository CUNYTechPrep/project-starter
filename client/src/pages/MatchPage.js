import React, { useState, useEffect } from "react"
import MatchBox from "../components/MatchBox"
import axios from "axios"
import "./MatchPage.css"

export default function MatchPage() {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        // axios.post().then()
        setMatches([
            {
                name: "Sett",
                college: "baruch",
                major: "CS",
                courses: ["CS 101", "CS 102"],
            },

            {
                name: "Alex",
                college: "queens",
                major: "CS",
                courses: ["CS 101", "CS 103"],
            },
        ])
    }, [])

    return (
        <div className="MatchPage">
            <div className="ui four cards">
                {matches.map((match, index) => (
                    <MatchBox key={index} {...match} />
                ))}
            </div>
        </div>
    )
}
