import React ,{useState, useEffect, props} from 'react';
import "../styles/Filter.css"
import { Dropdown, DropdownButton} from "react-bootstrap";


const FilterRow = (props) => {
    let filter = {
        borough: [],
        advancedplacement_courses: [],
        //[0] = psal_sports_boys, [1] = psal_sports_girls, [2] = psal_sports_coed
        sports: [[],[],[]],
        subway: [],
        postcode: [],
        accessbility: [],
    }
    const [checked_boxes, setCheckedBoxes] = useState({
        borough: [],
        advancedplacement_courses: [],
        //[0] = psal_sports_boys, [1] = psal_sports_girls, [2] = psal_sports_coed
        sports: [[],[],[]],
        subway: [],
        postcode: [],
        accessbility: [],
    }) 


    const checkedBox = (e) => {
        e.persist()
        e.preventDefault()
        var i; 
        var index;
        var current_sports;
    
        if(e.target.id === "Borough"){
            for(i =0; i<e.target.length-1 ; i++){
                //console.log(e.target[i]); 
                var current_borough = e.target[i].labels[0].innerText.toUpperCase().trim()
                if(filter["borough"].includes(current_borough) && e.target[i].checked===false){
                    if(e.target[i].checked===true){
                        filter["borough"].push(current_borough) //Adds the borough to the array
                    }
                    index = filter["borough"].indexOf(current_borough);
                    filter["borough"].splice( index, 1 );
                }
                else if (e.target[i].checked===true && !filter["borough"].includes(current_borough)){
                    filter["borough"].push(current_borough)
                }
            }
            console.log(filter)
        }
        else if(e.target.id === "postcode"){
            for(i =1; i<e.target.length-1 ; i++){
                var current_postcode = e.target[i].labels[0].innerText.trim()
                if(filter["postcode"].includes(current_postcode) && e.target[i].checked===false){
                    if(e.target[i].checked===true){
                        filter["postcode"].push(current_postcode) //Adds the postcode to the array
                    }
                    index = filter["postcode"].indexOf(current_postcode);
                    filter["postcode"].splice( index, 1 );
                }
                else if (e.target[i].checked===true && !filter["postcode"].includes(current_postcode)){
                    filter["postcode"].push(current_postcode)
                }
            }
        }
        else if(e.target.id === "advancedplacement_courses"){
            for(i =0; i<e.target.length-1 ; i++){
                //console.log(e.target[i]); 
                var current_advancedplacement_courses = e.target[i].labels[0].innerText.trim()
                if(filter["advancedplacement_courses"].includes(current_advancedplacement_courses) && e.target[i].checked===false){
                    if(e.target[i].checked===true){
                        filter["advancedplacement_courses"].push(current_advancedplacement_courses) //Adds the advancedplacement_courses to the array
                    }
                    index = filter["advancedplacement_courses"].indexOf(current_advancedplacement_courses);
                    filter["advancedplacement_courses"].splice( index, 1 );
                }
                else if (e.target[i].checked===true && !filter["advancedplacement_courses"].includes(current_advancedplacement_courses)){
                    filter["advancedplacement_courses"].push(current_advancedplacement_courses)
                }
            }
        }
        else if(e.target.id === "subway"){
            for(i =0; i<e.target.length-1 ; i++){
                //console.log(e.target[i]); 
                var current_subway = e.target[i].labels[0].innerText.trim()
                if(filter["subway"].includes(current_subway) && e.target[i].checked===false){
                    if(e.target[i].checked===true){
                        filter["subway"].push(current_subway) //Adds the subway to the array
                    }
                    index = filter["subway"].indexOf(current_subway);
                    filter["subway"].splice( index, 1 );
                }
                else if (e.target[i].checked===true && !filter["subway"].includes(current_subway)){
                    filter["subway"].push(current_subway)
                }
            }
        }
        else if(e.target.id === "MoreFilter"){
            //PSAL Sports Boys
            for(i =0; i<19 ; i++){
                //console.log(e.target[i]); 
                current_sports = e.target[i].labels[0].innerText.trim()
                if(filter["sports"][0].includes(current_sports) && e.target[i].checked===false){
                    if(e.target[i].checked===true){
                        filter["sports"][0].push(current_sports) //Adds the sports to the array
                    }
                    index = filter["sports"][0].indexOf(current_sports);
                    filter["sports"][0].splice( index, 1 );
                }
                else if (e.target[i].checked===true && !filter["sports"][0].includes(current_sports)){
                    filter["sports"][0].push(current_sports)
                }
            }
            //PSAL Sports Girls
            for(i =19; i<39 ; i++){
                //console.log(e.target[i]); 
                current_sports = e.target[i].labels[0].innerText.trim()
                if(filter["sports"][1].includes(current_sports) && e.target[i].checked===false){
                    if(e.target[i].checked===true){
                        filter["sports"][1].push(current_sports) //Adds the sports to the array
                    }
                    index = filter["sports"][1].indexOf(current_sports);
                    filter["sports"][1].splice( index, 1 );
                }
                else if (e.target[i].checked===true && !filter["sports"][1].includes(current_sports)){
                    filter["sports"][1].push(current_sports)
                }
            }
            //PSAL Sports Coed
            for(i =39; i<45 ; i++){
                //console.log(e.target[i]); 
                current_sports = e.target[i].labels[0].innerText.trim()
                if(filter["sports"][2].includes(current_sports) && e.target[i].checked===false){
                    if(e.target[i].checked===true){
                        filter["sports"][2].push(current_sports) //Adds the sports to the array
                    }
                    index = filter["sports"][2].indexOf(current_sports);
                    filter["sports"][2].splice( index, 1 );
                }
                else if (e.target[i].checked===true && !filter["sports"][2].includes(current_sports)){
                    filter["sports"][2].push(current_sports)
                }
            }
            //Accessbility
            for(i =45; i<48 ; i++){
                //console.log(e.target[i]); 
                var current_accessbility = e.target[i].labels[0].innerText.trim()
                if(filter["accessbility"].includes(current_accessbility) && e.target[i].checked===false){
                    if(e.target[i].checked===true){
                        filter["accessbility"].push(current_accessbility) //Adds the grade_range to the array
                    }
                    index = filter["accessbility"].indexOf(current_accessbility);
                    filter["accessbility"].splice( index, 1 );
                }
                else if (e.target[i].checked===true && !filter["accessbility"].includes(current_accessbility)){
                    filter["accessbility"].push(current_accessbility)
                }
            }
            
        }

        
        filterSchools(filter)
        setCheckedBoxes(filter)
    }

    const filterSchools = (filterOption) =>{
        //FILTER ONE BY ONE , FIRST borough,, THEN THE REST 
        /*

        borough: [],
        advancedplacement_courses: [],
        //[0] = psal_sports_boys, [1] = psal_sports_girls, [2] = psal_sports_coed
        sports: [[],[],[]],
        subway: [],
        postcode: [],
        accessbility: [],
        */
    if (filterOption.borough.length > 0 || filterOption.advancedplacement_courses.length > 0 || filterOption.sports[0].length > 0 || filterOption.sports[1].length > 0|| filterOption.sports[2].length > 0|| filterOption.subway.length > 0 || filterOption.postcode.length > 0|| filterOption.accessbility.length > 0 ){
        var temp = [];
        ["borough"].forEach((curr) => {
            filterOption[curr].forEach((e)=>{
              temp = temp.concat(props.data.filter((dict,n) => {return dict[curr] === e}))
          })
        });
  
        ["advancedplacement_courses"].forEach((curr) => {
          if(temp.length === 0 && filterOption.advancedplacement_courses.length > 0){
            temp = props.data
            filterOption["advancedplacement_courses"].forEach((e)=>{   
              var temp_2 = [];       
              temp_2 = temp_2.concat(temp.filter((dict,n) => {
                if(dict["advancedplacement_courses"] !== undefined){
                  return dict["advancedplacement_courses"].includes(e);
                }
                return
              }))
              temp = temp_2
            })
          }
          else if(filterOption.advancedplacement_courses.length > 0){
            
            filterOption["advancedplacement_courses"].forEach((e)=>{   
              var temp_2 = [];       
              temp_2 = temp_2.concat(temp.filter((dict,n) => {
                if(dict["advancedplacement_courses"] !== undefined){
                  return dict["advancedplacement_courses"].includes(e);
                } 
                return
              }))
              temp = temp_2
            })
          }
        });
        
        ["subway"].forEach((curr) => {
          if(temp.length === 0 && filterOption.subway.length > 0){
            temp = props.data
            filterOption[curr].forEach((e)=>{   
              var temp_2 = [];       
              temp_2 = temp_2.concat(temp.filter((dict,n) => {
                if(dict[curr] !== undefined){
                  if (dict[curr].includes(e+",")){
                    return dict[curr].includes(e);
                  }
                  else if (dict[curr].includes(e+" ")){
                    return dict[curr].includes(e);
                  }
                } 
                return
  
              }))
              temp = temp_2
            })
          }
          else if(filterOption.subway.length > 0){
            filterOption[curr].forEach((e)=>{   
              var temp_2 = [];       
              temp_2 = temp_2.concat(temp.filter((dict,n) => {
                if(dict[curr] !== undefined){
                  if (dict[curr].includes(e+",")){
                    return dict[curr].includes(e);
                  }
                  else if (dict[curr].includes(e+" ")){
                    return dict[curr].includes(e);
                  }
                }
                return
              }))
              temp = temp_2
            })
          }
        });
        
       ["sports"].forEach((curr) => {
          if(temp.length === 0 && (filterOption.sports[0].length > 0 || filterOption.sports[1].length > 0 || filterOption.sports[2].length > 0)){
            temp = props.data
            if(filterOption.sports[0].length > 0){
              filterOption[curr][0].forEach((e)=>{
                
                var temp_2 = [];       
                temp_2 = temp_2.concat(temp.filter((dict,n) => {
                  if(dict["psal_sports_boys"] !== undefined){
                    return dict["psal_sports_boys"].includes(e);
                  } 
                }))
                temp = temp_2
              })
            }
            if(filterOption.sports[1].length > 0){
              filterOption[curr][1].forEach((e)=>{
                var temp_2 = [];       
                temp_2 = temp_2.concat(temp.filter((dict,n) => {
                  if(dict["psal_sports_girls"] !== undefined){
                    return dict["psal_sports_girls"].includes(e);
                  } 
                }))
                temp = temp_2
              })
            }
            if(filterOption.sports[2].length > 0){
              filterOption[curr][2].forEach((e)=>{
                var temp_2 = [];       
                temp_2 = temp_2.concat(temp.filter((dict,n) => {
                  if(dict["psal_sports_coed"] !== undefined){
                    return dict["psal_sports_coed"].includes(e);
                  } 
                }))
                temp = temp_2
              })
            }
            return
          }
          else{
            if(filterOption.sports[0].length > 0){
              filterOption[curr][0].forEach((e)=>{
                
                var temp_2 = [];       
                temp_2 = temp_2.concat(temp.filter((dict,n) => {
                  if(dict["psal_sports_boys"] !== undefined){
                    return dict["psal_sports_boys"].includes(e);
                  } 
                }))
                temp = temp_2
              })
            }
            if(filterOption.sports[1].length > 0){
              filterOption[curr][1].forEach((e)=>{
                var temp_2 = [];       
                temp_2 = temp_2.concat(temp.filter((dict,n) => {
                  if(dict["psal_sports_girls"] !== undefined){
                    return dict["psal_sports_girls"].includes(e);
                  } 
                }))
                temp = temp_2
              })
            }
            if(filterOption.sports[2].length > 0){
              filterOption[curr][2].forEach((e)=>{
                var temp_2 = [];       
                temp_2 = temp_2.concat(temp.filter((dict,n) => {
                  if(dict["psal_sports_coed"] !== undefined){
                    return dict["psal_sports_coed"].includes(e);
                  } 
                }))
                temp = temp_2
              })
            }
            return
          }
        });
        ["postcode"].forEach((curr) => {
          if(temp.length === 0 && filterOption.postcode.length > 0){
            temp = []
            filterOption[curr].forEach((e)=>{   
              var temp_2 = [];       
              temp_2 = temp_2.concat(props.data.filter((dict,n) => {
                if(dict[curr] !== undefined){
                    return dict[curr].includes(e);
                } 
                return
  
              }))
              temp = temp.concat(temp_2)
            })
          }
          else if(filterOption.postcode.length > 0){
            var temp_2 = [];
            filterOption[curr].forEach((e)=>{          
              temp_2 = temp_2.concat(temp.filter((dict,n) => {
                if(dict[curr] !== undefined){
                    return dict[curr].includes(e);
                }
                return
              }))
              
            })
            temp = temp_2
          }
        });
        ["accessbility"].forEach((curr) => {
          if(temp.length === 0 && filterOption.accessbility.length > 0){
            temp = []
            filterOption[curr].forEach((e)=>{   
              var temp_2 = [];       
              temp_2 = temp_2.concat(props.data.filter((dict,n) => {
                if(dict["accessbility"] !== undefined){
                    return dict["grades"].includes(e);
                }
                return
  
              }))
              temp = temp.concat(temp_2)
            })
          }
          else if(filterOption.accessbility.length > 0){
            var temp_2 = [];
            filterOption[curr].forEach((e)=>{          
              temp_2 = temp_2.concat(temp.filter((dict,n) => {
                if(dict["school_accessibility"] !== undefined){
                  return dict["school_accessibility"].includes(e);
                }
                return
  
              }))
              
            })
            temp = temp_2
          }
        });
        props.selectedSchoolCallback(temp);
     }
     else{
      props.selectedSchoolCallback(null)
     }
    }

    
    const BoroughFilter = () => {
        return(
            <div  className="dropdown">
            <button className="btn dropdown-toggle" type="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="true">
                Borough
                <span className="caret"></span>
            </button>
            <form id="Borough" onSubmit={(e)=>{checkedBox(e)}}>
            <ul className="dropdown-menu checkbox-menu allow-focus" aria-labelledby="dropdownMenu1">
                {
                    ["Queens", "Brooklyn", "Manhattan", "Bronx", "Staten IS"].map((e) => {
                        if(checked_boxes["borough"].includes(e.toUpperCase())){
                            return(
                                <li key={e}>
                                    <label>
                                        <input defaultChecked="true" type="checkbox" /> {e}
                                    </label>
                                </li>
                            );
                        }
                        else{
                            return(
                                
                                <li key={e}>
                                    <label>
                                        <input type="checkbox" /> {e}
                                    </label>
                                </li>
                            );
                        }
                        
                    })
                }
                <div className="dropdown-divider"></div>
                <li className="text-center">
                    <input type="submit" value="Submit" className="mx-auto"/>
                </li>
                
                </ul>
            </form>
        </div>
        )
    }
    const SubwayFilter = () => {
        return(
            <div  className="dropdown" >
                <button className="btn dropdown-toggle" type="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="true">
                    Subway
                    <span className="caret"></span>
                </button>
                <form id="subway" onSubmit={(e)=>{checkedBox(e)}}>
                <ul className="dropdown-menu checkbox-menu allow-focus" aria-labelledby="dropdownMenu1">
                    <div className="dropsize">
                    {
                        ['1', '2', '3'].map((e) => {
                            if(checked_boxes["subway"].includes(e)){
                                return(
                                    <li key={e}>
                                        <label>
                                            <input defaultChecked="true" type="checkbox" /> <span className="subway-icon mta-red">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                            else{

                                return(
                                    <li key={e}>
                                        <label>
                                            <input type="checkbox" /> <span className="subway-icon mta-red">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                        })
                    }
                    {
                        ['4', '5','6'].map((e) => {
                            if(checked_boxes["subway"].includes(e)){
                                return(
                                    <li key={e}>
                                        <label>
                                            <input defaultChecked="true" type="checkbox" /> <span className="subway-icon mta-green">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                            else{

                                return(
                                    <li key={e}>
                                        <label>
                                            <input type="checkbox" /> <span className="subway-icon mta-green">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                        })
                    }
                    {
                        ['A', 'C','E'].map((e) => {
                            if(checked_boxes["subway"].includes(e)){
                                return(
                                    <li key={e}>
                                        <label>
                                            <input defaultChecked="true" type="checkbox" /> <span className="subway-icon mta-blue">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                            else{

                                return(
                                    <li key={e}>
                                        <label>
                                            <input type="checkbox" /> <span className="subway-icon mta-blue">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                        })
                    }
                    {
                        ['B' ,'D', 'F','M'].map((e) => {
                            if(checked_boxes["subway"].includes(e)){
                                return(
                                    <li key={e}>
                                        <label>
                                            <input defaultChecked="true" type="checkbox" /> <span className="subway-icon mta-orange">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                            else{

                                return(
                                    <li key={e}>
                                        <label>
                                            <input type="checkbox" /> <span className="subway-icon mta-orange">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                        })
                    }
                    {
                        ['7'].map((e) => {
                            if(checked_boxes["subway"].includes(e)){
                                return(
                                    <li key={e}>
                                        <label>
                                            <input defaultChecked="true" type="checkbox" /> <span className="subway-icon mta-purple">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                            else{

                                return(
                                    <li key={e}>
                                        <label>
                                            <input type="checkbox" /> <span className="subway-icon mta-purple">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                        })
                    }
                    {
                        ['G'].map((e) => {
                            if(checked_boxes["subway"].includes(e)){
                                return(
                                    <li key={e}>
                                        <label>
                                            <input defaultChecked="true" type="checkbox" /> <span className="subway-icon mta-green-2">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                            else{

                                return(
                                    <li key={e}>
                                        <label>
                                            <input type="checkbox" /> <span className="subway-icon mta-green-2">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                        })
                    }
                    {
                        ['N','Q','W', 'R'].map((e) => {
                            if(checked_boxes["subway"].includes(e)){
                                return(
                                    <li key={e}>
                                        <label>
                                            <input defaultChecked="true" type="checkbox" /> <span className="subway-icon mta-yellow">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                            else{

                                return(
                                    <li key={e}>
                                        <label>
                                            <input type="checkbox" /> <span className="subway-icon mta-yellow">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                        })
                    }
                    {
                        ['L',  'S'].map((e) => {
                            if(checked_boxes["subway"].includes(e)){
                                return(
                                    <li key={e}>
                                        <label>
                                            <input defaultChecked="true" type="checkbox" /> <span className="subway-icon mta-gray">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                            else{

                                return(
                                    <li key={e}>
                                        <label>
                                            <input type="checkbox" /> <span className="subway-icon mta-gray">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                        })
                    }
                    {
                        ['J', 'Z'].map((e) => {
                            if(checked_boxes["subway"].includes(e)){
                                return(
                                    <li key={e}>
                                        <label>
                                            <input defaultChecked="true" type="checkbox" /> <span className="subway-icon mta-brown">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                            else{

                                return(
                                    <li key={e}>
                                        <label>
                                            <input type="checkbox" /> <span className="subway-icon mta-brown">{e}</span>
                                        </label>
                                    </li>
                                );
                            }
                        })
                    }
                    </div>
                    <div className="dropdown-divider"></div>
                    <li className="text-center">
                        <input type="submit" value="Submit" className="mx-auto"/>
                    </li>
                    </ul>
                </form>
            </div>
        );
    }
    const PostcodeFilter = () => {
        const filterFunction = () => {
            var input, filter, ul, li, a, i;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            var div = document.getElementById("myDropdown");
            a = div.getElementsByTagName("input");
            li = div.getElementsByTagName("li")
            //ignore 0 because that is input text box
            for (i = 1; i < a.length; i++) {
              var txtValue = a[i].labels[0].textContent.trim();
              if (txtValue.includes(input.value)) {
                li[i-1].hidden = false;
              } else {
                li[i-1].hidden = true;
              }
              
            }
          }

        return(
            <div  className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="true">
                    Zipcode
                    <span className="caret"></span>
                </button>
                <form id="postcode" onSubmit={(e)=>{checkedBox(e)}}>
                <ul className="dropdown-menu checkbox-menu allow-focus" aria-labelledby="dropdownMenu1" >
                    <div className="dropsize" id="myDropdown">
                    <input type="text" placeholder="Search for zipcode" id="myInput" onChange={filterFunction} />
                    {
                        ['10002', '10003', '10004', '10006', '10009', '10010', '10011', '10013', '10016', '10019', '10021', '10023', 
                        '10024', '10026', '10027', '10029', '10030', '10031', '10032', '10033', '10034', '10035', '10036', '10038', 
                        '10039', '10040', '10065', '10128', '10282', '10301', '10302', '10304', '10306', '10312', '10314', '10451', 
                        '10452', '10453', '10454', '10455', '10456', '10457', '10458', '10459', '10460', '10461', '10462', '10463', 
                        '10466', '10467', '10468', '10469', '10472', '10473', '10475', '11101', '11102', '11103', '11106', '11201', 
                        '11203', '11204', '11205', '11206', '11207', '11208', '11209', '11210', '11211', '11212', '11213', '11214', 
                        '11215', '11216', '11217', '11218', '11220', '11221', '11222', '11223', '11224', '11225', '11226', '11229', 
                        '11230', '11231', '11232', '11233', '11235', '11236', '11237', '11238', '11354', '11355', '11358', '11361', 
                        '11364', '11365', '11366', '11367', '11368', '11373', '11375', '11385', '11411', '11412', '11413', '11416', 
                        '11417', '11418', '11419', '11420', '11423', '11426', '11427', '11432', '11433', '11434', '11691', '11694'].map((e) => {
                            if(checked_boxes["postcode"].includes(e)){
                                return(
                                    <li key={e}>
                                        <label>
                                            <input defaultChecked="true" type="checkbox" /> {e}
                                        </label>
                                    </li>
                                );
                            }
                            else{
                                return(
                                    <li key={e}>
                                        <label>
                                            <input type="checkbox" /> {e}
                                        </label>
                                    </li>
                                );
                            }
                        })
                    }
                    </div>
                    <div className="dropdown-divider"></div>
                    <li className="text-center">
                        <input type="submit" value="Submit" className="mx-auto"/>
                    </li>
                    </ul>
                </form>
            </div>
        );
    }
    
    const MoreFilter = () =>{
        return(
            <div  className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="true">
                    More Filters
                    <span className="caret"></span>
                </button>
                <form id="MoreFilter" onSubmit={(e)=>{checkedBox(e)}}>
                    <ul className="dropdown-menu checkbox-menu allow-focus" aria-labelledby="dropdownMenu1">
                        <div className="dropsize">
                        <p  className = "text-center"> <strong>PSAL Sports Boys</strong></p>
                        {
                            ['Badminton', 'Baseball', 'Basketball', 'Bowling', 'Cross Country', 'Fencing', 'Football', 'Gymnastics', 'Handball', 'Indoor Track', 'Lacrosse', 'Outdoor Track', 'Rugby', 'Soccer', 'Swimming', 'Table Tennis', 'Tennis', 'Volleyball', 'Wrestling'].map((e) => {
                                if(checked_boxes["sports"][0].includes(e)){
                                    return(
                                        <li key={e} >
                                            <label>
                                                <input defaultChecked="true" type="checkbox" /> {e}
                                            </label>
                                        </li>
                                    );
                                }
                                else{
                                    return(
                                        <li key={e}>
                                            <label>
                                                <input type="checkbox" /> {e}
                                            </label>
                                        </li>
                                    );
                                }
                            })
                        }
                        <div className="dropdown-divider"></div>
                        <p  className = "text-center"> <strong>PSAL Sports Girls</strong></p>
                        {
                            ['Badminton', 'Basketball', 'Bowling', 'Cross Country', 'Fencing', 'Flag Football', 'Golf', 'Gymnastics', 'Handball', 'Indoor Track', 'Lacrosse', 'Outdoor Track', 'Rugby', 'Soccer', 'Softball', 'Swimming', 'Table Tennis', 'Tennis', 'Volleyball', 'Wrestling'].map((e) => {
                                if(checked_boxes["sports"][1].includes(e)){
                                    return(
                                        <li key={e}>
                                            <label>
                                                <input defaultChecked="true" type="checkbox" /> {e}
                                            </label>
                                        </li>
                                    );
                                }
                                else{
                                    return(
                                        <li key={e}>
                                            <label>
                                                <input type="checkbox" /> {e}
                                            </label>
                                        </li>
                                    );
                                }
                            })
                        }
                        <div className="dropdown-divider"></div>
                        <p  className = "text-center"> <strong>PSAL Sports Coed</strong></p>
                        {
                            ['Cricket', 'Double Dutch', 'Golf', 'Outdoor Track', 'Stunt', 'Table Tennis'].map((e) => {
                                if(checked_boxes["sports"][2].includes(e)){
                                    return(
                                        <li key={e}>
                                            <label>
                                                <input defaultChecked="true" type="checkbox" /> {e}
                                            </label>
                                        </li>
                                    );
                                }
                                else{
                                    return(
                                        <li key={e}>
                                            <label>
                                                <input type="checkbox" /> {e}
                                            </label>
                                        </li>
                                    );
                                }
                            })
                        }
                        <div className="dropdown-divider"></div>
                        <p  className = "text-center"> <strong>Accessbility</strong></p>
                        {
                            ['Not Accessible', 'Partially Accessible', 'Fully Accessible'].map((e) => {
                                if(checked_boxes["accessbility"].includes(e)){
                                    return(
                                        <li key={e}>
                                            <label>
                                                <input defaultChecked="true" type="checkbox" /> {e}
                                            </label>
                                        </li>
                                    );
                                }
                                else{
                                    return(
                                        <li key={e}>
                                            <label>
                                                <input type="checkbox" /> {e}
                                            </label>
                                        </li>
                                    );
                                }
                            })
                        }
                        </div>
                        <div className="dropdown-divider"></div>
                        <li className="text-center">
                            <input type="submit" value="Submit" className="mx-auto"/>
                        </li>
                    </ul>
                    
                </form>
            </div>
        );
    }
    
    useEffect(()=>{
        //sets filter array
        Object.keys(checked_boxes).forEach( (element) => filter[element] = checked_boxes[element])
        
    },[checked_boxes])
    
    return(
        <div className="row justify-content-center m-auto">
            <div className="rowPad"><BoroughFilter/></div>
            
            <div className="rowPad"><SubwayFilter/></div>
                
            <div className="rowPad"><PostcodeFilter/></div>

            <div className="rowPad"><MoreFilter/></div>
        </div>
    );
}

export default FilterRow;