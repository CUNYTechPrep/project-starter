import React,{useEffect, useState, props} from 'react';
import Post from '../components/Post';
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
        <InputForm items = {items}  compItems = {compItems}/>
        <FilterRow/>
      </div>
      <div className="rightSide">
        <Map/>
      </div>
      
    </div>
  );
}

export default HomePage;