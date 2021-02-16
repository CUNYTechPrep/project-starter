import React from "react"

function Loading(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <div className="ui segment">
                    <div className="ui active inverted dimmer">
                        <div className="ui large text loader">{props.message}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading
