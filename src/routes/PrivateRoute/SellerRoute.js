import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller, isLoading] = useSeller(user?.email)
   const location = useLocation()


   
   if(loading || isLoading){
       return <Loader/>
    }
    if(user && isSeller){
        return children;
    }

    return <Navigate to="/signin" state={{from: location}} replace></Navigate>
};

export default SellerRoute;