import "../styles/homePage.css";
export default function CompareMiddle({ schoolOne, schoolTwo }) {
  return (
    <div class="main">
      {Object.keys(schoolTwo).length > 0 && (
        <div className="leftSchool">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">{schoolTwo.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Grades: {schoolTwo.gradespan} &nbsp; &nbsp; Total Students:{" "}
                {schoolTwo.totalstudents} &nbsp; &nbsp; Accessibility:{" "}
                {schoolTwo.accessibility_description}
              </h6>
              <hr />
              <p className="card-text">
                <b>Eligibility </b> {schoolTwo.eligibility_prog1}
              </p>
              <hr />
              <p className="card-text">
                <b>Activities: </b> {schoolTwo.activities_description}
              </p>
              <hr />
              <p className="card-text">
                <b>Sports: </b> {schoolTwo.othersports}
              </p>
              <hr />
              <p className="card-text">
                <b>ELL Programs: </b> {schoolTwo.ellprograms}
              </p>
              <hr />
              <p className="card-text">
                <b>Elective Classes: </b> {schoolTwo.electiveclasses ? schoolTwo.electiveclasses : "N/A"}
              </p>
              <hr />
              <p className="card-text">
                <b>Language Classes: </b> {schoolTwo.languageclasses ? schoolTwo.languageclasses : "N/A"}
              </p>
            </div>
          </div>
        </div>
      )}
      {Object.keys(schoolOne).length > 0 && (
        <div className="rightSchool">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">{schoolOne.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Grades: {schoolOne.gradespan} &nbsp; &nbsp; Total Students:{" "}
                {schoolOne.totalstudents} &nbsp; &nbsp; Accessibility:{" "}
                {schoolOne.accessibility_description}
              </h6>
              <hr />
              <p className="card-text">
                <b>Eligibility </b> {schoolOne.eligibility_prog1}
              </p>
              <hr />
              <p className="card-text">
                <b>Activities: </b> {schoolOne.activities_description}
              </p>
              <hr />
              <p className="card-text">
                <b>Sports: </b> {schoolOne.othersports}
              </p>
              <hr />
              <p className="card-text">
                <b>ELL Programs: </b> {schoolOne.ellprograms ? schoolOne.ellprograms : "N/A"}
              </p>
              <hr />
              <p className="card-text">
                <b>Elective Classes: </b> {schoolOne.electiveclasses ? schoolOne.electiveclasses : "N/A"}
              </p>
              <hr />
              <p className="card-text">
                <b>Language Classes: </b> {schoolOne.languageclasses ? schoolOne.languageclasses : "N/A"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
