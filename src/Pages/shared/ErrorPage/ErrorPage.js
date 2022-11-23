import React from 'react';
import errorImage from '../../../images/404.gif';



const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
                <img src={errorImage} alt="errorImage" />
                {/* <Link to="/"><button>Back To HomePage</button></Link> */}
            </div>
        </div>
    );
};

export default ErrorPage;