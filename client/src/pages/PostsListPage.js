import React, { useState, useEffect } from "react";
import MicroPostCard from "../components/MicroPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

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

  if (error) return <ErrorAlert details="Failed to fetch all micro posts" />;
  if (loading) return <LoadingSpinner />;

  return (
    <>
      {/* <div className="container mt-3">
        <AddTransaction />
      </div> */}

      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          {posts.map((entryData) => (
            <MicroPostCard {...entryData} key={entryData.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PostsListPage;

/**  From Affat
 *     <>
      <div>
        <div className="container mt-3">
          <AddTransaction />
        </div>

        <div className="row justify-content-center">
          {posts.map((entryData) => (
            <MicroPostCard {...entryData} key={entryData.id} />
          ))}
        </div>
      </div>
    </>
 */
