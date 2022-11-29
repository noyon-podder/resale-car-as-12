import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const CategoryProductCard = ({car, setBookingCar,handleReportButton}) => {
    const {name, image, price, use, resalePrice, location, sellerName, verification} = car
    return (
        <div className="card card-side w-full border relative">
        <img src={image} alt="Movie" className='w-2/4 rounded-tl-xl	'/>
        <div className="py-4 px-6">
            <div className='border-b flex items-center pb-1 gap-x-3'>
            <span className="text-primary text-lg mb-4 font-medium">{sellerName}</span>
            {verification && <FaCheckSquare className='text-[#0f3cd1] text-2xl rounded-full -mb-1'/>}
            </div>
            
          <h2 className="font-semibold text-lg text-accent mb-4">{name}</h2>
          
            <span className='absolute bottom-3 left-4 text-sm bg-[#0d6efd] p-2 text-white rounded-lg font-bold'>${resalePrice}</span>
            <p className='text-accent font-normal'>Market Price : <span>${price}</span></p>
            <p className='my-1 text-accent font-normal'>Years of use: <span>{use}</span></p>
            <p className=' text-accent font-normal'>Location : <span>{location}</span></p>
            <label htmlFor="booking-category-car" 
            onClick={() => setBookingCar(car)}
            className='btn  btn-sm btn-error absolute bottom-3 right-3'>Book Now</label>
            <button className='btn btn-info btn-xs my-3' onClick={() => handleReportButton(car)}>report</button>
        </div>
      </div>
    );
};

export default CategoryProductCard;