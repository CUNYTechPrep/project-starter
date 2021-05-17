import "../styles/homePage.css";
export default function CompareHighschool( {schoolOne, schoolTwo }) {
  return (
    <div class="main">
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
  );
}
