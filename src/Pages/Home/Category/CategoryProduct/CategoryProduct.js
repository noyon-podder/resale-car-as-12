import React, { useState } from 'react';
import toast from 'react-hot-toast';
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
    const handleReportButton = product => {
        

        fetch('http://localhost:5000/report-item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Product Report Successfully')
            }
        })
    }
    return (
      <div>
          <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10 py-20'>
    
    {
       cars?.map(car => <CategoryProductCard
       key={car._id}
        car={car}
        handleReportButton={handleReportButton}
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