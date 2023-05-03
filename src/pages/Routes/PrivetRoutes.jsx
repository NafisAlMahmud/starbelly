import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="mx-auto mt-28">
        <h2 className="text-4xl font-bold">Loading....</h2>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivetRoutes;
