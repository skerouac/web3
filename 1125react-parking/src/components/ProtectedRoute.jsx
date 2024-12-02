import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading, error } = useAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  //   if(error) {
  //     return <p>Error with the accounts</p>
  //     //pop-up en doorsturen naar login pagina
  //   }

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
