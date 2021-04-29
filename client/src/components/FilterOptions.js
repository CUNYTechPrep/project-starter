import React from 'react';
import "../styles/Filter.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const preventDropdownClose = (e) =>{
    if(e.target.localName !== "button"){
        e.stopPropagation()
    }
}
const checkedBox = (e) => {
    console.log(e)
}
const SizeFilter = () => {
    return(
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    )
}
const FilterRow = () => {
    return(
                <SizeFilter/>
    );
}

export default FilterRow;