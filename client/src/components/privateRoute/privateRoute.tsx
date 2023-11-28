import { Navigate } from 'react-router-dom';
import React from 'react';
import {JwtPayload, jwtDecode} from "jwt-decode";

type PrivateRouteProps = {
  children: React.ReactNode;
};

interface jwttypes extends JwtPayload {
  decoded : {
    exp: undefined | Date
  }
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem('token');


  // Helper function to decode the token and check its expiration
  const isTokenExpired = (token: string) => {
    try {
      const decoded : jwttypes = jwtDecode(token);
      if (decoded !== undefined) {return decoded.exp < Date.now() / 1000;}
      
    } catch (error) {
      return true; // if error occurs during decoding, consider token expired
    }
  };

  // Check if token is not null and not expired
  if (token && !isTokenExpired(token)) {
    return children;
  } else {
    // Clear the token from localStorage if it's expired or invalid
    localStorage.removeItem('token');
    
    // Redirect to the login page
    return <Navigate to="/login-admin" replace />;
  }
};

export default PrivateRoute;
