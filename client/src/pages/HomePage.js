import React,{useEffect, useState, props} from 'react';
import Card from '../components/SchoolCard';
import Loading from '../components/Loading';
import Map from '../components/Map';
import "../styles/homePage.css";
import InputForm from '../components/InputForms';
import FilterRow from '../components/FilterOptions';
import '../styles/theme.css';
import { useAuth } from "../contexts/AuthContext";
import { data } from 'jquery';

const HomePage = () => {
  const [schoolJSON, setJSON] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems ]= useState([]);
  const [compItems, setCompItems] = useState([]);
  const [selectedSchools, setSelectedSchools] = useState(null);
  const [userBookmark, setUserBookmark] = useState([]);
  const { currentUser } = useAuth();

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
      if(currentUser){
        fetch('http://localhost:8080/api/bookmarks/bookmarkedSchools', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({userUUID: currentUser.uid}),
              })
              .then(response => response.json())
              .then(data => {
                  setUserBookmark(data);
                  console.log('bookmark: ', data);
              })
              .catch((error) => {
                  console.error('Error:', error);
              });
        }
  }, [])
  
  const selectedSchoolCallback = ( childData ) =>{
    if(childData && childData.length===0){
      setSelectedSchools(null)
    }
    else{
      setSelectedSchools(childData)
    }
  }

  console.log("SELECTED", selectedSchools)
  return(
    loading ? <Loading /> : 
    <div className="parent">
      <div className="leftSide">
        <div className="row">
          <InputForm items = {items}  compItems = {compItems} />
          <FilterRow selectedSchoolCallback= {selectedSchoolCallback} data= {schoolJSON}/>
        </div>
        <div className="row">
          {
            selectedSchools && selectedSchools.map((school) =>{
              return(
                <Card content={school} name={school.school_name} id={school.dbn} bookmark={userBookmark} userID = {currentUser.uid}/>
              );
            })
          }
        </div>
      </div>
      <div className="rightSide">
        {
          selectedSchools!==null?
          <Map highSchoolData = {selectedSchools}/>
          :
          <Map highSchoolData = {selectedSchools}/>
        }
      </div>
      
    </div>
  );
}

export default HomePage;