import React from 'react';

const CategoryProductCard = ({car}) => {
    const {name, image, price, use, resalePrice, location} = car
    return (
        <div className="card card-side w-full border relative">
        <img src={image} alt="Movie" className='w-2/4 rounded-tl-xl	'/>
        <div className="py-4 px-6">
            <span className="text-primary text-sm mb-4 font-medium">Brand New Car</span>
          <h2 className="font-semibold text-lg text-accent mb-4">{name}</h2>
          
            <span className='absolute bottom-3 left-4 text-sm bg-[#0d6efd] p-2 text-white rounded-lg font-bold'>${resalePrice}</span>
            <p className='text-accent font-normal'>Market Price : <span>${price}</span></p>
            <p className='my-1 text-accent font-normal'>Use This car: <span>{use}</span></p>
            <p className=' text-accent font-normal'>Location : <span>{location}</span></p>
           <button className='btn  btn-sm btn-error absolute bottom-3 right-3'>Book Now</button>
        </div>
      </div>
    );
};

export default CategoryProductCard;