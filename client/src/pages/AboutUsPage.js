import React from "react";

function AboutUsPage(props) {
  return (
    <>
      <div className="col text-center">
        <h2 className="mb-3">About our project</h2>
        <p className="mb-5">
          Contador is a finance management application that will allow users to
          track each and every buy they make. Contador allows users to record
          their monthly income, expenses and target goals to achieve. That may
          be their short-term or long-term goals. Their goals can be anything
          from saving for a downpayment on a house or going for a road trip to
          the poconos.
        </p>
        <h2 className="mb-3">About our Team</h2>
        <div className="row">
          <div className="col-lg-6">
            <h3>Anthony Duran</h3>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/Code1Here"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code1Here
              </a>
              , Full Stack Developer
            </p>
          </div>
          <div className="col-lg-6">
            <h3>Affat Asir</h3>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/affat25"
                target="_blank"
                rel="noopener noreferrer"
              >
                affat25
              </a>
              , Front-end Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
