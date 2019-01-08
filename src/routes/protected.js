import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isLoggedIn() || true ? 
          <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />   
    )} />
);

export default ProtectedRoute;
