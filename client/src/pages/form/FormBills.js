import React from 'react'

function FormBills(props){
    
    const handleClickNext = e =>{
        e.preventDefault();
        {props.nextStep()};
    }

    const handleClickPrev = e => {
        e.preventDefault();
        {props.prevStep()};
    }

    return(
        <div>
            <input
            type="text"
            placeholder="Enter electric..."
            defaultValue={props.values.electric}
            className="form-control"
            onChange={props.handleChange("electric")}
            autoFocus
            />

            <input
            type="text"
            placeholder="Enter gas..."
            defaultValue={props.values.gas}
            className="form-control"
            onChange={props.handleChange("gas")}
            autoFocus
            />

            <input
            type="text"
            placeholder="Enter water..."
            defaultValue={props.values.water}
            className="form-control"
            onChange={props.handleChange("water")}
            autoFocus
            />

            <button
            onClick={handleClickPrev}  
            className="btn btn-primary">
            Back
            </button>

            <button 
            onClick={handleClickNext}  
            className="btn btn-primary">
            Continue
            </button>
        </div>
    )
}

export default FormBills;