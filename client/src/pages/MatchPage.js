import React, { useState, useEffect } from "react"
import MatchBox from "../components/MatchBox"
import axios from "axios"
import "./MatchPage.css"

export default function MatchPage() {
    const [matches, setMatches] = useState([])
  
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/match")
            setMatches(response.data)
        }

        fetchData()
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
