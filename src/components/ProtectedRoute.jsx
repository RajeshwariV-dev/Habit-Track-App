import React from "react";

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  // IF NO TOKEN REDIRECT
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // OTHERWISE SHOW PAGE
  return children;
}

export default ProtectedRoute;