import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const SchoolDropdown = ({ schoolGrade }) => {
  const [grade, setGrade] = useState(null);
  const [fetchUrl, setFetchUrl] = useState(
    "https://data.cityofnewyork.us/resource/"
  );
  const [apiCode] = useState({
    elementary: "e7es-jx5j",
    middle: "f6s7-vytj",
    highschool: "qpj9-6qjn",
  });

  const handleOnChange = (e) => {
    setGrade(e.target.value);
    setFetchUrl("https://data.cityofnewyork.us/resource/")
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
    <div className="pt-4">
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
    </div>
  );
}

export default SchoolDropdown;