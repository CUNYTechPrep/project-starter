import React,{useEffect, useState, props} from 'react';
import Card from '../components/SchoolCard';
import Loading from '../components/Loading';
import Map from '../components/Map'
import "../styles/homePage.css"
import InputForm from '../components/InputForms'
import FilterRow from '../components/FilterOptions'
import '../styles/theme.css'
import { data } from 'jquery';

const HomePage = () => {
  const [schoolJSON, setJSON] = useState(null);
  const [loading, setLoading] = useState(true)
  const [items, setItems ]= useState([])
  const [compItems, setCompItems] = useState([])
  const [selectedSchools, setSelectedSchools] = useState(null)
  useEffect(() => {
    const options ={
      type: "GET",
      data: {
        "$limit" : 5000,
        "$$app_token" : "YOURAPPTOKENHEREs"
      }
    };
    fetch("https://data.cityofnewyork.us/resource/qpj9-6qjn.json", options)
      .then(res => res.json())
      .then(data => {
        let tempItems = []
        let tempComp = []
        let index = 0
        data.forEach((e)=> {
          tempItems.push({
            id: index++,
            dbn: e.dbn,
            school_name: e.school_name,
          })
          tempComp[e.school_name] = e.dbn

        }
        )
        setItems(tempItems)
        setCompItems(tempComp)
        setJSON(data)
        setLoading(false)
      })
      .catch(err => console.log("API ERROR: ", err));

  }, [])
  
  const selectedSchoolCallback = ( childData ) =>{
    setSelectedSchools(childData)
  }
  console.log("SELECTED", selectedSchools)
  return(
    loading ? <Loading /> : 
    <div className="parent">
      <div className="leftSide">
        <div>
          <InputForm items = {items}  compItems = {compItems} />
          <FilterRow selectedSchoolCallback= {selectedSchoolCallback} data= {schoolJSON}/>
        </div>
        <div>
          {
            selectedSchools && selectedSchools.map((school) =>{
              return(
                <Card content={school} name={school.school_name} id={school.dbn} />
              );
            })
          }
        </div>
      </div>
      <div className="rightSide">
        <Map data = {selectedSchools}/>
      </div>
      
    </div>
  );
}

export default HomePage;