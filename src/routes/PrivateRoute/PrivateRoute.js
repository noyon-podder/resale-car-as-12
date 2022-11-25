import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
   const location = useLocation()
    if(user){
        return children;
    }
    if(loading){
        return <Loader/>
    }

    return <Navigate to="/signin" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;