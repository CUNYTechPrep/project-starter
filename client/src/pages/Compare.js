import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../styles/homePage.css";
import CompareForm from "../components/CompareForm";

export default function Compare() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [compItems, setCompItems] = useState([]);
  const [startCompare, setStartCompare] = useState(false);
  const [schoolOne, setSchoolOne] = useState({});
  const [schoolTwo, setSchoolTwo] = useState({});

  useEffect(() => {
    const options = {
      type: "GET",
      data: {
        $limit: 5000,
        $$app_token: "YOURAPPTOKENHEREs",
      },
    };
    fetch("https://data.cityofnewyork.us/resource/qpj9-6qjn.json", options)
      .then((res) => res.json())
      .then((data) => {
        let tempItems = [];
        let tempComp = [];
        let index = 0;
        data.forEach((e) => {
          tempItems.push({
            id: index++,
            dbn: e.dbn,
            school_name: e.school_name,
            grades2020: e.grades2020,
            total_students: e.total_students,
            school_accessibility: e.school_accessibility,
            psal_sports_boys: e.psal_sports_boys,
            psal_sports_girls: e.psal_sports_boys,
            psal_sports_coed: e.psal_sports_coed,
            advancedplacement_courses: e.advancedplacement_courses,
            academicopportunities1: e.academicopportunities1,
            academicopportunities2: e.academicopportunities2,
            academicopportunities3: e.academicopportunities3,
            addtl_info1: e.addtl_info1
          });
          tempComp[e.school_name] = e.dbn;
        });
        setItems(tempItems);
        setCompItems(tempComp);
        setLoading(false);
      })
      .catch((err) => console.log("API ERROR: ", err));
    // fetch for all of user's review
  }, []);

  const setSchools = (e) => {
    e.preventDefault();
    setStartCompare(true);
  };


  return (
    <div>
      <Container
        className="w-100"
        style={{ maxWidth: "700px", marginTop: "20px" }}
      >
        <div className="text-center mt-2">
          <h2>Compare Schools</h2>
        </div>
        <div className="">
          <CompareForm
            items={items}
            compItems={compItems}
            makeComparison={startCompare}
            setSchoolTwo={(school) => setSchoolTwo(school)}
            setSchoolOne={(school) => setSchoolOne(school)}
          />
        </div>
        <div className="text-center" style={{ marginTop: "20px" }}>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ borderRadius: "40px", fontSize: "20x" }}
            onClick={(e) => setSchools(e)}
          >
            Compare
          </button>
        </div>
      </Container>

      <div className="main">
        {Object.keys(schoolTwo).length > 0 && (
          <div className="leftSchool">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">{schoolTwo.school_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Grades: {schoolTwo.grades2020} &nbsp; &nbsp; 
                  Total Students:{" "}{schoolTwo.total_students} &nbsp; &nbsp; 
                  Accessibility:{" "}{schoolTwo.school_accessibility}
                </h6>
                <hr />
                <p className="card-text">
                  <b>AP Courses: </b> {schoolTwo.advancedplacement_courses}
                </p>
                <hr />
                <p className="card-text">

                  <b>PSAL Sports Boys: </b> {schoolTwo.psal_sports_boys}
                  <br />
                  <b>PSAL Sports Girls: </b> {schoolTwo.psal_sports_girls}
                </p>
                <hr />
                <p className="card-text">
                  <b>Academic Opportunties: </b>{" "}
                  {schoolTwo.academicopportunities1},{" "}
                  {schoolTwo.academicopportunities2},
                  {schoolTwo.academicopportunities3}
                </p>
                <hr />
                <p className="card-text">
                  <b>Additional Info: </b>{" "}
                  {schoolTwo.addtl_info1}
                  
                </p>
              </div>
            </div>
          </div>
        )}
        {Object.keys(schoolOne).length > 0 && (
          <div className="rightSchool">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">{schoolOne.school_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Grades: {schoolOne.grades2020} &nbsp; &nbsp; 
                  Total Students:{" "}{schoolOne.total_students} &nbsp; &nbsp; 
                  Accessibility:{" "}{schoolOne.school_accessibility}
                </h6>
                <hr />
                <p className="card-text">
                  <b>AP Courses: </b> {schoolOne.advancedplacement_courses}
                </p>
                <hr />
                <p className="card-text">
                  <b>PSAL Sports Boys: </b> {schoolOne.psal_sports_boys}
                  <br />
                  <b>PSAL Sports Girls: </b> {schoolOne.psal_sports_girls}
                </p>
                <hr />
                <p className="card-text">
                  <b>Academic Opportunties: </b>{" "}
                  {schoolOne.academicopportunities1},{" "}
                  {schoolOne.academicopportunities2},
                  {schoolOne.academicopportunities3},
                  {schoolOne.academicopportunities4}
                </p>
                <hr />
                <p className="card-text">
                  <b>Additional Info: </b>{" "}
                  {schoolTwo.addtl_info1}
                  
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
