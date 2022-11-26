import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../../../components/Title/Title';

const Payment = () => {
    const booking = useLoaderData()
    const {productName} = booking;

    return (
        <div>
           <Title>Payment Information</Title>
        
        <h3 className='text-3xl font-semibold text-neutral mt-7'>Payment for <span className='text-primary'>{booking.productName}</span></h3>

        </div>
    );
};

export default Payment;