import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Loading from "../components/Loading";
import Error from "../components/Error";

function PostsListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let response = await fetch("/api/micro_posts");
        let allPosts = await response.json();
        setPosts(allPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all micro_posts", error);
        setError(true);
      }
    }

    getData();

    return () => {
      // clean up function
    };
  }, []);

  if (error) return <Error details="Failed to fetch all micro posts" />;
  if (loading) return <Loading />;

  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
        {posts.map((entryData) => (
          <Post {...entryData} key={entryData.id} />
        ))}
      </div>
    </div>
  );
}

export default PostsListPage;
