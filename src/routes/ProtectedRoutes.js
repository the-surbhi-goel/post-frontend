import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  return isLogin ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;
