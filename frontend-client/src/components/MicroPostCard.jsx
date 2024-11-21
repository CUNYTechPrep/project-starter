import { useNavigate } from "react-router-dom";

function MicroPostCard({ content, createdAt, id }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-8 col-lg-7">
          <div className="card mb-4 shadow">
            <div className="card-body card-text">
              {content}
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <button 
                onClick={handleBack} 
                className="btn btn-secondary btn-sm"
              >
                Back to Posts
              </button>
              <small className="text-muted">{createdAt}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MicroPostCard;
