import React from 'react';
import "../styles/homePage.css";

const SchoolForm = () => {

    return(
        <form>
          <div className="form-group inputSetting mb-auto">
              <input type="text" className="form-control " placeholder="Search School Name" aria-label="School" aria-describedby="basic-addon1"/>
          </div>
        </form>
    );
    
}
const AddressForm = () => {
    return(
        <form>
          <div className="form-group inputSetting mb-3">
              <input type="text" className="form-control " placeholder="Enter Address" aria-label="Address" aria-describedby="basic-addon1"/>
          </div>
        </form>
    );
}
const InputForm = () =>{
    return (
      <div className="container-fluid text-center">
          <SchoolForm/>
          <AddressForm/>
      </div>
    );
}

export default InputForm;