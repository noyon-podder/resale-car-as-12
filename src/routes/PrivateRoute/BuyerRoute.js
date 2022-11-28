import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

const BuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isBuyer, isLoading] = useBuyer(user?.email)
   const location = useLocation()
   if(loading || isLoading){
       return <Loader/>
    }
    if(user && isBuyer){
        return children;
    }

    return <Navigate to="/signin" state={{from: location}} replace></Navigate>
};

export default BuyerRoute;