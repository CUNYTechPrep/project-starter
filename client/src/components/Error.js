import React from "react";

function Error({ details }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="alert alert-danger" role={"alert"}>
        <strong>An error occurred</strong> {details || ""}
      </div>
    </div>
  );
}

export default Error;
