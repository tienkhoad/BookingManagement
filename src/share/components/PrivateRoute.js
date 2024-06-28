import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../modules/auth/hooks/AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
