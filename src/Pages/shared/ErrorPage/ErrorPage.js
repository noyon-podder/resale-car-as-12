import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import errorImage from '../../../images/404.gif';



const ErrorPage = () => {
    const error = useRouteError()
    const {userLogout} = useContext(AuthContext);
    
    const handleLogout = () => {
        userLogout()
        .then( () => {
          toast.success('Logout Successfully')
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
               <p className='text-red-600 text-5xl font-bold text-center'>{error.statusText || error.message}</p>
               <div> <img src={errorImage} alt="errorImage" /></div>
               <p className='text-center text-2xl'>Please <button className='btn btn-primary btn-xs' onClick={handleLogout}>Sign Out</button> and again Sign In</p>
            </div>
        </div>
    );
};

export default ErrorPage;