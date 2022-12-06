import React, { useState, useEffect } from "react";
import TransactionCard from "../components/TransactionCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import AddTransaction from "../components/AddTransaction";
import { useParams } from "react-router-dom";



function ShowPostPage() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let params = useParams();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let response = await fetch("/api/micro_posts/" + params.id);
        let postData = await response.json();
        setPost(postData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching /api/micro_posts/" + params.id, error);
        setError(true);
      }
    }

    getData();

    return () => {
      // clean up function
    };
  }, [params.id]);

  if (error)
    return (
      <ErrorAlert details={"Micro post with id=" + params.id + " not found"} />
    );
  if (loading) return <LoadingSpinner />;

  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center" style={{"width":"600px"}}>
      <TransactionCard {...post} />
      <div className="d-flex flex-row justify-content-end">
          <h4 className="p-2 border rounded text-muted">Total</h4>
        </div>
      </div>
      <div className="float-end mb-3">
        <AddTransaction/>
      </div>
    </div>
  );
}

export default ShowPostPage;
