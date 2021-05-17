import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const SchoolDropdown = ({ schoolGrade, clearSchoolSelection }) => {
  const [change, setChanged] = useState(false);
  const [grade, setGrade] = useState(null);
  const [fetchUrl, setFetchUrl] = useState(
    "https://data.cityofnewyork.us/resource/"
  );
  const [apiCode] = useState({
    elementary: "e7es-jx5j",
    //TODO: Auto complete not working for middle school api
    middle: "f6s7-vytj",
    highschool: "qpj9-6qjn",
  });

  const handleOnChange = (e) => {
    setGrade(e.target.value);

    clearSchoolSelection();
    setFetchUrl("https://data.cityofnewyork.us/resource/")
    setChanged(true);
  };

  useEffect(() => {
    switch (grade) {
      case "elementary":
        setFetchUrl((url) => `${url}${apiCode.elementary}.json`);
        break;
      case "middle":
        setFetchUrl((url) => `${url}${apiCode.middle}.json`);
        break;
      case "highschool":
        setFetchUrl((url) => `${url}${apiCode.highschool}.json`);
        break;
      default:
        return;
    }
  }, [grade]);

  useEffect(() => {
    if(fetchUrl.includes('json')) {
      schoolGrade(grade, fetchUrl);
    }
  }, [fetchUrl])

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control as="select" custom onChange={(e) => handleOnChange(e)}>
            <option selected disabled>
              Select School Grade
            </option>
            <option value="elementary">Elementary School</option>
            <option value="middle">Middle School</option>
            <option value="highschool">High School</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}

export default SchoolDropdown;