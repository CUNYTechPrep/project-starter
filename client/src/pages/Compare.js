import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../styles/homePage.css";
import CompareForm from "../components/CompareForm";
import SchoolDropdown from "../components/SchoolDropdown";
import { elementarySchoolData, middleSchoolData, highSchoolData } from "../utils/schoolDataFields.js";

export default function Compare() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [compItems, setCompItems] = useState([]);
  const [startCompare, setStartCompare] = useState(0);
  const [schoolOne, setSchoolOne] = useState({});
  const [schoolTwo, setSchoolTwo] = useState({});
  const [schoolGrade, setSchoolGrade] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    console.log('url', url)
    console.log('schoolGrade', schoolGrade);
    if (url !== null) {
      let dataFields;
      switch (schoolGrade) {
        case "elementary":
          dataFields = elementarySchoolData;
          break;
        case "middle":
          dataFields = middleSchoolData;
          break;
        case "highschool":
          dataFields = highSchoolData;
          break;
      }
      const options = {
        type: "GET",
        data: {
          $limit: 5000,
          $$app_token: "YOURAPPTOKENHEREs",
        },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          console.log('fetch data', data)
          let tempItems = [];
          let tempComp = [];
          let index = 0;
          data.forEach((e) => {
            let infoItem = {};
            infoItem.id = index++;
            dataFields.forEach((dataField) => {
              infoItem[dataField] = e[dataField]
            });

            tempItems.push(infoItem);
            tempComp[e.school_name] = e.dbn;
          });
          setItems(tempItems);
          setCompItems(tempComp);
          setLoading(false);
        })
        .catch((err) => console.log("API ERROR: ", err));
      // fetch for all of user's review
    }
  }, [url]);

  const setSchools = (e) => {
    e.preventDefault();

    setStartCompare(startCompare + 1);
  };

  const handleDropdown = (schoolGrade, url) => {
    setSchoolGrade(schoolGrade);
    setUrl(url);
    clearSelectedSchools()
  };

  const clearSelectedSchools = () => {
    setSchoolOne({});
    setSchoolTwo({});
  }

  return (
    <div>
      <Container
        className="w-100"
        style={{ maxWidth: "700px", marginTop: "20px" }}
      >
        <div className="text-center mt-2">
          <h2>Compare Schools</h2>
        </div>
        <SchoolDropdown
          schoolGrade={(schoolGrade, url) => handleDropdown(schoolGrade, url)}
          clearSchoolSelection={() => clearSelectedSchools()}
        />
        {schoolGrade && (
          <>
            <div className="">
              <CompareForm
                schoolGrade={schoolGrade}
                items={items}
                compItems={compItems}
                makeComparison={startCompare}
                schoolOne={schoolOne}
                schoolTwo={schoolTwo}
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
          </>
        )}
      </Container>

      <div className="main">
        {Object.keys(schoolTwo).length > 0 && (
          <div className="leftSchool">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">{schoolTwo.school_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Grades: {schoolTwo.grades2020} &nbsp; &nbsp; Total Students:{" "}
                  {schoolTwo.total_students} &nbsp; &nbsp; Accessibility:{" "}
                  {schoolTwo.school_accessibility}
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
                  {schoolTwo.academicopportunities1}{" "}
                  {schoolTwo.academicopportunities2}{" "}
                  {schoolTwo.academicopportunities3}{" "}
                  {schoolTwo.academicopportunities4}{" "}
                  {schoolTwo.academicopportunities5}{" "}
                </p>
                <hr />
                <p className="card-text">
                  <b>Additional Info: </b> {schoolTwo.addtl_info1}
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
                  Grades: {schoolOne.grades2020} &nbsp; &nbsp; Total Students:{" "}
                  {schoolOne.total_students} &nbsp; &nbsp; Accessibility:{" "}
                  {schoolOne.school_accessibility}
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
                  {schoolOne.academicopportunities1}{" "}
                  {schoolOne.academicopportunities2}{" "}
                  {schoolOne.academicopportunities3}{" "}
                  {schoolOne.academicopportunities4}{" "}
                  {schoolOne.academicopportunities5}{" "}
                </p>
                <hr />
                <p className="card-text">
                  <b>Additional Info: </b> {schoolOne.addtl_info1}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
