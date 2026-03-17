import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('jwt');
    // You can add more checks here if necessary, such as token expiration
    return !!token;
  };

  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        );
      }}
    />
  );
};

export default ProtectedRoute;