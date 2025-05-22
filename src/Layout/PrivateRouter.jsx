import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loader from '../pages/Loader';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.state);
    // console.log(location);
    if (loading) {
        return <Loader></Loader>
    }
    if (user && user?.email) {
        return children 
    }
    return (
        
        <Navigate to="/login" state={location.pathname} />

    );
};

export default PrivateRouter;