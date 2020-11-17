import React from 'react'
import './Tag.css';

export default function Tag(props) {
    return (
        <div>
        {props.classes.map((c) =>(
            <span className="tag">{c}</span>
        ))}
    </div>
    );
}
