import { Navigate } from "react-router-dom";
import React from "react";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login-admin" replace />;
};

export default PrivateRoute;
