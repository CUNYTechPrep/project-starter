import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../styles/homePage.css";
import CompareForm from "../components/CompareForm";
import SchoolDropdown from "../components/SchoolDropdown";
import {
  elementarySchoolData,
  middleSchoolData,
  highSchoolData,
} from "../utils/schoolDataFields.js";
import CompareSchools from "../components/CompareSchools";

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
          let tempItems = [];
          let tempComp = [];
          let index = 0;
          data.forEach((e) => {
            let infoItem = {};
            infoItem.id = index++;
            dataFields.forEach((dataField) => {
              infoItem[dataField] = e[dataField];
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
        <SchoolDropdown
          schoolGrade={(schoolGrade, url) => handleDropdown(schoolGrade, url)}
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

      {Object.keys(schoolOne).length > 0 &&
        Object.keys(schoolTwo).length > 0 && (
          <CompareSchools
            schoolGrade={schoolGrade}
            schoolOne={schoolOne}
            schoolTwo={schoolTwo}
          />
        )}
    </div>
  );
}
