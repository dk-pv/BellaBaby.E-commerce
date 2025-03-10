import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(storedUser.role.toLowerCase())) {
    return <Navigate to="/adminpage" replace />;
  }

  return element;
};

export default ProtectedRoute;
