import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../../../components/Loader/Loader';
import BookingModal from '../BookingModal/BookingModal';
import CategoryProductCard from '../CategoryProductCard/CategoryProductCard';


const CategoryProduct = () => {
    const cars = useLoaderData();
    const navigation = useNavigation()
    const [bookingCar, setBookingCar] = useState(null)

    if(navigation.state === 'loading'){
        return <Loader/>
    }

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