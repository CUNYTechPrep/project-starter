import React from 'react';
import "../styles/Filter.css"
import { Dropdown, DropdownButton} from "react-bootstrap";

const preventDropdownClose = (e) =>{
    console.log(e)
    /*if(e.target.localName !== "button"){
        e.stopPropagation()
    }*/
}
const checkedBox = (e) => {
    console.log(e)
}
const SizeFilter = () => {
    return(
        <DropdownButton onClick={(e)=>console.log(e)} id="dropdown-basic-button" title="Size">
            <Dropdown.Item >Action</Dropdown.Item>
            <Dropdown.Item >Another action</Dropdown.Item>
            <Dropdown.Item >Something else</Dropdown.Item>
        </DropdownButton>
    )
}
const SubwayFilter = () => {
    return(
        <div className="dropdown" onClick={(e)=> preventDropdownClose(e)}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Subway
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" >Action</a>
                <a className="dropdown-item" >Another action</a>
                <a className="dropdown-item" >Something else here</a>
            </div>
        </div>
    );
}
const SportsFilter = () => {
    return(
        <div className="dropdown" onClick={(e)=> preventDropdownClose(e)}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sports
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" >Action</a>
                <a className="dropdown-item" >Another action</a>
                <a className="dropdown-item" >Something else here</a>
            </div>
        </div>
    );
}

const MoreFilter = () =>{
    return(
        <div className="dropdown" onClick={(e)=> preventDropdownClose(e)}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More Filter
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" >Action</a>
                <a className="dropdown-item" >Another action</a>
                <a className="dropdown-item" >Something else here</a>
            </div>
        </div>
    );
}
const FilterRow = () => {
    return(
        <div className="row justify-content-center rowPad">
            <div className="col"><SizeFilter/></div>
                

            <div className="col"><SubwayFilter/></div>
                
            <div className="col"><SportsFilter/></div>

            <div className="col"><MoreFilter/></div>
        </div>
    );
}

export default FilterRow;