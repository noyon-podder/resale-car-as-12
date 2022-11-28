import React from 'react';

const AdvertiseCard = ({advertise}) => {

    const {image, name, sellerName, price, quality, use, location, } = advertise;     
    console.log(advertise)
    return (
       <>
       {!advertise.paid &&   <div className="card card-compact w-96 bg-base-100 shadow-xl relative">
         <figure><img src={image} alt="Shoes" /></figure>
         <div className="card-body">
         <span className="text-primary text-lg font-medium">{sellerName}</span>
           <h2 className="font-semibold text-lg text-accent">{name}</h2>
           <p className='text-accent font-normal'>Market Price : <span>${price}</span></p>
                   <p className='my-1 text-accent font-normal'>Years of use: <span>{use}</span></p>
                   <p className='my-1 text-accent font-normal'>Quality: <span>{quality}</span></p>
                   <p className=' text-accent font-normal'>Location : <span>{location}</span></p>
         </div>
       </div>
       }
       </>
    );
};

export default AdvertiseCard;