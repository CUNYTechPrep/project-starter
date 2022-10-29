import React from 'react'

function FormAddress(props){

    const handleClick = e =>{
        e.preventDefault();
        {props.nextStep()};
    }


    return(
        <div>
            <h1>Address</h1>
            <input
            type="text"
            placeholder="Enter address..."
            defaultValue={props.values.address}
            className="form-control"
            onChange={props.handleChange("address")}
            autoFocus
            />

            <button 
            onClick={handleClick}  
            className="btn btn-primary">
            Continue
            </button>
        </div>
    )
}

export default FormAddress;