import React from "react";
import { Navigate } from "react-router-dom";
import { useCart } from "../context-reducer/context/LoginContext";

const ProtectedRoutes = ({ children }) => {
  const { isLogin } = useCart();

  return isLogin ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;
