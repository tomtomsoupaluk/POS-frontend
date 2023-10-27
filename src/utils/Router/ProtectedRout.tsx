import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
type Props = {}

export const PrivateRoute: React.FC<any> = ({ isAuth }) =>{
    if (isAuth) {
        return <Outlet />;
    } else {
        return <Navigate to="/login"/>;
    }
};
export const AuthRoute: React.FC<any> = ({ isAuth }) =>{
    if (!isAuth) {
        return <Outlet />;
    } else {
        return <Navigate to=""/>;
    }
};