import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from '../utils/auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
       authService.isAuthenticated === true ? 
          <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />   
    )} />
);

export default ProtectedRoute;
