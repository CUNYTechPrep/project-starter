import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom'
const Profile = () => {
  const auth = useContext(AuthContext);
  const { user, isAuthenticated } = auth;

  return (
    isAuthenticated && (
      <div className="nav-item nav-link">
         <Link to="/account">{user.email}</Link>
      </div>
    )
  );
};
export default Profile;