import React, { useState, useEffect } from "react"
import MatchBox from "../components/MatchBox"
import axios from "axios"
import "./MatchPage.css"
import Loading from "../components/Loading"

export default function MatchPage() {
    const [matches, setMatches] = useState()
    const [mentors, setMentors] = useState([
        {
            name: "John Cena",
            college: "Queens College",
            major: "Computer Science",
            courses: ["Software Engineer at Google"],
            pic: `https://randomuser.me/api/portraits/med/men/3.jpg`,
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
            pic: `https://randomuser.me/api/portraits/med/men/12.jpg`,
        },
        {
            name: "Jonathan Cruz",
            college: "Queens College",
            major: "Computer Science",
            courses: ["Software Engineer at Facebook"],
            pic: `https://randomuser.me/api/portraits/med/men/24.jpg`,
        },
        {
            name: "Alex Garica",
            college: "Queens College",
            major: "Computer Science",
            courses: ["Software Engineer at Google"],
            pic: `https://randomuser.me/api/portraits/med/men/3.jpg`,
        },
        {
            name: "Veronica Alaba",
            college: "Queens College",
            major: "Computer Science",
            courses: ["Software Engineer at Facebook"],
            pic: `https://randomuser.me/api/portraits/med/women/6.jpg`,
        },
        {
            name: "Bruce Chan",
            college: "Queens College",
            major: "Computer Science",
            courses: ["Software Engineer Intern at CVS"],
            pic: `https://randomuser.me/api/portraits/med/men/4.jpg`,
        },
        {
            name: "Jonathan Cruz",
            college: "Queens College",
            major: "Computer Science",
            courses: ["Software Engineer at Facebook"],
            pic: `https://randomuser.me/api/portraits/med/men/2.jpg`,
        },
    ])

    useEffect(() => {
        const fetchData = async () => {
            const matchResponse = await axios.get("/api/match")

            setMatches(matchResponse.data)
        }
        fetchData()
    }, [])

    if (!matches) return <Loading message="Matching..." />

    return (
        <div className="MatchPage">
            <h3>Classmates</h3>
            <div className="ui four cards">
                {matches.map((match, index) => (
                    <MatchBox key={index} {...match} />
                ))}
            </div>
            <h3>Mentors</h3>
            <div className="ui four cards">
                {mentors?.map((match, index) => (
                    <MatchBox key={index} {...match} />
                ))}
            </div>
        </div>
    )
}
