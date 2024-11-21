function ErrorAlert({ details }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="alert alert-danger" role={"alert"}>
        <h1>This will cause a merge conflict.</h1>
      </div>
    </div>
  );
}

export default ErrorAlert;
