import React from "react"

export default function MatchBox(props) {
    const { name, college, major, courses, pic } = props
    return (
        <div className="card">
            <div className="content">
                <img
                    className="right floated mini ui image"
                    alt="avatar"
                    src={pic}
          
                
                />
                <div className="header">{name}</div>
                <div className="meta">{college}</div>
                <div className="meta">{major}</div>

                {courses?.map(course => (
                    <div key="course" className="ui small label">
                        {course}
                    </div>
                ))}
            </div>
            <div class="ui bottom attached button">
                <i class="add icon"></i>
                Add Friend
            </div>
        </div>
    )
}
