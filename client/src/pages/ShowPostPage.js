import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Loading from "../components/Loading";
import Error from "../components/Error";
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
    return <Error details={"Micro post with id=" + params.id + " not found"} />;
  if (loading) return <Loading />;

  return <Post {...post} />;
}

export default ShowPostPage;
