import React, {useState, props, useEffect} from 'react';
import "../styles/homePage.css";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {Alert} from 'react-bootstrap'

  
    const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log('OnSearch', string, results)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

const SchoolForm = ({items, compItems, priority, selectedSchool}) => {
    const [error, setError] = useState('')
    const styles = {
      zIndex: priority
    }
    const handleOnSelect = (item) => {
      // the item selected
      console.log('OnSelect',item)
      console.log('handleOnSelect input priority', priority);
      selectedSchool(item, priority);
    }

    const formSubmit = (e) =>{
        //Remove this once I add school page
        e.preventDefault()
        if(e.target[0].defaultValue in compItems === false){
            //e.preventDefault()
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
    
};

const CompareForm = ({items, compItems, makeComparison, setSchoolOne: compareSchoolOne, setSchoolTwo: compareSchoolTwo}) =>{
  const [schoolOne, setSchoolOne] = useState({});
  const [schoolTwo, setSchoolTwo] = useState({});
  const handleSchoolSelection = (school, priority) => {
    if(priority == 1) {
      setSchoolOne(school);
    } else if (priority == 2) {
      setSchoolTwo(school);
    }
  }
  useEffect(() => {
    if(makeComparison>0) {
      //render map - send schoolOne, schoolTwo value to Compare component
      compareSchoolOne(schoolOne);
      compareSchoolTwo(schoolTwo);
    }
  }, [makeComparison])

    return (
      <div className="container-fluid text-center">
          <SchoolForm items = {items} compItems = {compItems} priority={"2"} selectedSchool={(school, priority) => handleSchoolSelection(school, priority)}/>
          <SchoolForm items = {items} compItems = {compItems} priority={"1"} selectedSchool={(school, priority) => handleSchoolSelection(school, priority)}/>
      </div>
    );
}


export default CompareForm;
