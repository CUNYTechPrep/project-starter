import React, {useState} from 'react'

function FormInfo(props){
    
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
            <div>
                <label htmlFor="rented">Is the property currently tenanted? </label>
                <input type="checkbox" name="rented" id="rented" onChange={props.handleChange("tenanted")} checked={props.values.tenanted}/>
            </div>

             
            {props.values.tenanted ? 
                (<input
                type="text"
                placeholder="Enter rent..."
                defaultValue={props.values.rent}
                className="form-control"
                onChange={props.handleChange("rent")}
                autoFocus
                />) : (<></>)
            }
            <input
            type="text"
            placeholder="Enter mortgage..."
            defaultValue={props.values.mortgage}
            className="form-control"
            onChange={props.handleChange("mortgage")}
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

export default FormInfo;