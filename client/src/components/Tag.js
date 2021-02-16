import React from "react"
import "./Tag.css"

export default function Tag(props) {
    return (
        <div>
            {props.classes?.map((c, key) => (
                <span className="tag" key={key}>
                    {c}
                </span>
            ))}
        </div>
    )
}
