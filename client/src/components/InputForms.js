import React, {useState, props} from 'react';
import "../styles/homePage.css";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {Alert} from 'react-bootstrap'

  const styles = {
      zIndex: "1"
  }
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log('OnSearch', string, results)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log('OnSelect',item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

const SchoolForm = ({items, compItems}) => {
    const [error, setError] = useState('')
    
    const formSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target[0].defaultValue)
        //console.log(e.target[0].defaultValue in compItems)
        if(e.target[0].defaultValue in compItems === false){
            setError('Please type in the correct school name.')
            return
        }
        setError('')
        //If this works, make sure to redirect to school page once that's set up 
        //FINISH THIS 
    }
    return(
        <form onSubmit={(e) => formSubmit(e)}>
          <div className="form-group inputSetting m-auto">
              <ReactSearchAutocomplete 
                items={items}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                fuseOptions={{ keys:["school_name"] }}
                resultStringKeyName= "school_name"
                styling ={styles}
                placeholder="Search School Name"
                autoFocus
              />
          </div>
          {error && <Alert className=" mt-2 mb-auto" variant="danger"
            >{error}</Alert>}
        </form>
    );
    
}
const AddressForm = (props) => {
    return(
        <form>
            <div className="form-group inputSetting ">
                <ReactSearchAutocomplete 
                    items={props.items}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    placeholder="Enter Address"
                    autoFocus
                />
            </div>
        </form>
    );
}
const InputForm = ({items, compItems}) =>{
    return (
      <div className="container-fluid text-center">
          <SchoolForm items = {items} compItems = {compItems}/>
          <AddressForm/>
      </div>
    );
}

export default InputForm;