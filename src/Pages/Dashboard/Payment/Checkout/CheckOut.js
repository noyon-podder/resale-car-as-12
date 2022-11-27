import React, { useEffect, useState } from 'react';


import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckOut = ({booking}) => {
  const [cardError, setCardError] = useState('')
  const [success, setSetSuccess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements  = useElements();
    const {productPrice, userEmail, userName, _id, carId, productName} = booking;
    console.log(booking)

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch('http://localhost:5000/create-payment-intent', {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" ,
        },
        body: JSON.stringify({ productPrice }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [productPrice]);


    const handleBookingSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
          return;
        }
    
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });

        if (error) {
          console.log('[error]', error);
          setCardError(error.message)
        }else{
          setCardError('')
        }
        setSetSuccess('')
        setProcessing(true)
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: userName,
                email: userEmail
              },
            },
          },
        );
        
        if(confirmError){
          setCardError(confirmError.message);
          return
        }

        if(paymentIntent.status === "succeeded"){
       

          const payment = {
            productPrice,
            transactionId : paymentIntent.id,
            userEmail,
            carId: carId,
            bookingId: _id,
            productName
          }
          fetch('http://localhost:5000/payments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payment)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.insertedId){
              setSetSuccess('Payment Successfully')
              setTransactionId(paymentIntent.id)
            }
          })
        }
        setProcessing(false)
        

    }
    return (
       <>
       {
        success && <div className='mb-10'>
          <p className='text-green-500 text-xl font-semibold mb-3'>{success}</p>
          <p className='text-neutral'>TXR id: <strong>{transactionId}</strong></p>
        </div>
       }
        <form onSubmit={handleBookingSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              display: 'block',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-error btn-sm mt-7'
      type="submit" 
      disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
      <p className='text-primary mt-4 font-semibold'>{cardError}</p>
       </>
    );
};

export default CheckOut;