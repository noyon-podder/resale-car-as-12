import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../../../components/Title/Title';

import CheckOut from './Checkout/CheckOut';



const stripePromise = loadStripe('pk_test_51M8T8rC3nf5rDn3xzCngM0O0w2R7UqXCbv7LK8oD4EpK3NanoqsMo6JoLf5S5T6jkrCrHzvg3kOeNOyIG6S3At2Y00f1yuPIrK');

console.log(stripePromise)
const Payment = () => {

    const booking = useLoaderData()
    const {productName} = booking;

    return (
        <div>
           <Title>Payment for <span className='text-primary'>{productName}</span></Title>
        
      
            <div className='w-1/2 border mt-16 p-10'>
            <Elements stripe={stripePromise}>
                <CheckOut booking={booking}/>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;