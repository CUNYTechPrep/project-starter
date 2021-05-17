import "../styles/homePage.css";
export default function CompareElementary({ schoolOne, schoolTwo }) {
  return (
    <div className="main">
      {Object.keys(schoolTwo).length > 0 && (
        <div className="leftSchool">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">{schoolTwo.school_name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Grades: {schoolTwo.grades} &nbsp; &nbsp; Accessibility:{" "}
                {schoolTwo.accessibility}
              </h6>
              <hr />
              <p className="card-text">
                <b>School Type: </b> {schoolTwo.school_type}
              </p>
              <hr />
              <p class="card-text">
                <b>Dual Language: </b>
                {schoolTwo.dual_language ? schoolTwo.dual_language : "N/A"}
              </p>
              <hr />
              <p className="card-text">
                <b>Borough</b>{" "}
                {schoolTwo.borough.charAt(0) +
                  schoolTwo.borough.slice(1).toLowerCase()}{" "}
                NY {schoolTwo.postcode}
              </p>
              <p className="card-text">
                <b>Address </b> {schoolTwo.address}
              </p>
              <p className="card-text">
                <b>Phone Number</b> {schoolTwo.phone}
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
                Grades: {schoolOne.grades} &nbsp; &nbsp; Accessibility:{" "}
                {schoolOne.accessibility}
              </h6>
              <hr />
              <p className="card-text">
                <b>School Type: </b> {schoolOne.school_type}
              </p>
              <hr />
              <p class="card-text">
                <b>Dual Language: </b>
                {schoolOne.dual_language ? schoolOne.dual_language : "N/A"}
              </p>
              <hr />
              <p className="card-text">
                <b>Borough</b>{" "}
                {schoolOne.borough.charAt(0) +
                  schoolOne.borough.slice(1).toLowerCase()}{" "}
                NY {schoolOne.postcode}
              </p>
              <p className="card-text">
                <b>Address </b> {schoolOne.address}
              </p>
              <p className="card-text">
                <b>Phone Number</b> {schoolOne.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
