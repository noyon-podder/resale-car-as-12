import React, {useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductCard from './CategoryProductCard';
import BookingModal from '../CategoryProduct/BookingModal'


const CategoryProduct = () => {
    const cars = useLoaderData()
    const [bookingCar, setBookingCar] = useState(null)


    console.log(bookingCar)
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
   />
    }    
         </div>
    );
};

export default CategoryProduct;