import { Link } from "react-router-dom";

function MicroPostCard({ content, createdAt, id, onDelete }) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/" + id}>{content}</Link>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center small text-muted">
          <span>{createdAt}</span>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MicroPostCard;
