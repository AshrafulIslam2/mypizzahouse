import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const PriveteRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);
  const location = useLocation();
  if (loader) {
    return;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default PriveteRoute;
