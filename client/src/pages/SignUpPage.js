import React, { useState } from "react";

function SignUpPage(props) {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <>
      <div className="container mt-4">
        <h1>Sign up</h1>
        <form className="row g-3 mt-2">
          <div className="col-md-6">
            <label for="firstName" className="form-label">
              First Name *
            </label>
            <input type="text" className="form-control" id="firstName" required></input>
          </div>
          <div className="col-md-6">
            <label for="lastName" className="form-label">
              Last Name *
            </label>
            <input type="text" className="form-control" id="lastName" required></input>
          </div>
          <div className="col-md-10">
            <label for="emailInfo" className="form-label">
              Email *
            </label>
            <input type="email" className="form-control" id="emailInfo" required></input>
          </div>
          <div className="col-md-2">
            <label for="birthDate" className="form-label">
              Date of birth *
            </label>
            <input type="date" className="form-control" id="birthDate" required></input>
          </div>

          {/* vvvvvvvvv */}

          <div className="col-md-6 dropdown">
            <label for="genderIdentity" className="form-label">
              Gender Identity *
            </label>

            <button className="btn dropdown-toggle border text-end form-control text-muted" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Please Select{" "}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another
                </a>{" "}
                action
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something
                </a>{" "}
                else here
              </li>
            </ul>
          </div>

          {/* ^^^^^^^^^ */}

          <div className="col-md-6">
            <label for="monthlyIncome" className="form-label">
              Monthly Income *
            </label>
            <input type="text" className="form-control" id="monthlyIncome" required></input>
          </div>
          <div className="col-md-12">
            <label for="comments" className="form-label">
              About me
            </label>
            <textarea className="form-control" id="comments" rows="3" placeholder="Say something good about yourself! You could mention a fund target goal!"></textarea>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
