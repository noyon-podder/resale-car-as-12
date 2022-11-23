import React from 'react';
import banner from '../../../images/banner.jpg';
const Banner = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${banner})` ,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} className='h-screen relative'>
            <div 
            style={{
                position: 'absolute',
                top: '50%',
                left: '80px',
                transform: 'translateY(-50%)' 
            }}
            className='max-w-7xl mx-auto w-1/2'>
            <span className='bg-primary uppercase font-semibold text-white p-2'> We are here for you</span>

            <h2 className=' sm:text-4xl text-7xl my-5 text-white font-semibold  capitalize'>Improve your business with us</h2>
            <h6 className='text-white font-normal text-xl w-3/4 mt-5'>We provide the best solution for your car needs.We offer great vehicle round the clock.</h6>
            <button className='btn btn-primary px-8 mt-8'>Start Now</button>
            </div>
        </div>
    );
};

export default Banner;