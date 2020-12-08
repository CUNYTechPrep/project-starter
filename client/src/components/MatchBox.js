import React from "react"
import { Link } from "react-router-dom"

export default function MatchBox(props) {
    const { id, name, college, major, courses, pic } = props

    return (
        <div className="card">
            <div className="content">
                <img className="right floated mini ui image" alt="avatar" src={pic} />
                <div className="header">{name}</div>
                <div className="meta">{college}</div>
                <div className="meta">{major}</div>

                {courses?.map((course, index) => (
                    <div key={index} className="ui small label" style={{ margin: "1.5px" }}>
                        {course}
                    </div>
                ))}
            </div>
            <div class="extra content">
                <Link to={`/profile/${id}`}>
                    <div class="ui two buttons">
                        <div class="ui basic green button">View Profile</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
