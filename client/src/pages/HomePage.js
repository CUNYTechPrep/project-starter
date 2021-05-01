import React,{useEffect, useState, props} from 'react';
import Card from '../components/SchoolCard';
import Loading from '../components/Loading';
import Map from '../components/Map'
import "../styles/homePage.css"
import InputForm from '../components/InputForms'
import FilterRow from '../components/FilterOptions'

const HomePage = () => {
  var [schoolJSON, setJSON] = useState(null);
  var [loading, setLoading] = useState(true)
  var [items, setItems ]= useState([])
  var [compItems, setCompItems] = useState([])
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
        var tempItems = []
        var tempComp = []
        var index = 0
        data.forEach((e)=> {
          tempItems.push({
            id: index++,
            dbn: e.dbn,
            school_name: e.school_name,
          })
          tempComp[e.school_name] = true

        }
        )
        setItems(tempItems)
        setCompItems(tempComp)
        setJSON(data)
        setLoading(false)
      })
      .catch(err => console.log("API ERROR: ", err));

  }, [])

  return(
    loading ? <Loading /> : 
    <div className="parent">
      <div className="leftSide">
        <div>
          <InputForm items = {items}  compItems = {compItems}/>
          <FilterRow/>
        </div>
        <div>
          <Card content={"TRUEsdsdsd"} createdAt={"BRUH TIME"} id={1} />
          <Card content={"TRUEsdsdsd"} createdAt={"BRUH TIME"} id={2} />
          <Card content={"TRUEsdsdsd"} createdAt={"BRUH TIME"} id={3} />
          <Card content={"TRUEsdsdsd"} createdAt={"BRUH TIME"} id={4} />
          <Card content={"TRUEsdsdsd"} createdAt={"BRUH TIME"} id={5} />
          <Card content={"TRUEsdsdsd"} createdAt={"BRUH TIME"} id={6} />
          <Card content={"TRUEsdsdsd"} createdAt={"BRUH TIME"} id={7} />
          <Card content={"TRUEsdsdsd"} createdAt={"BRUH TIME"} id={8} />
        </div>
      </div>
      <div className="rightSide">
        <Map/>
      </div>
      
    </div>
  );
}

export default HomePage;