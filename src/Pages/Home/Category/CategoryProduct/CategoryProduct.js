import React, {useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductCard from '../CategoryProductCard/CategoryProductCard';
import BookingModal from '../BookingModal/BookingModal'


const CategoryProduct = () => {
    const cars = useLoaderData()
    const [bookingCar, setBookingCar] = useState(null)


    return (
      <div>
          <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10 py-20'>
    
    {
       cars?.map(car => <CategoryProductCard
       key={car._id}
        car={car}
        setBookingCar={setBookingCar}
       ></CategoryProductCard>)
    }
      
   </div>

   {
   bookingCar && <BookingModal
   bookingCar={bookingCar}
   setBookingCar={setBookingCar}
   />
    }    
         </div>
    );
};

export default CategoryProduct;