import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Profile = () => {
  const auth = useContext(AuthContext);
  const { user, isAuthenticated } = auth;

  return (
    isAuthenticated && (
      <div className="nav-item nav-link">
         <p>{user.email}</p>
      </div>
    )
  );
};
export default Profile;