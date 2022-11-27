import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../../components/Loader/Loader';

const MyOrder = () => {

    const {data: orders = [], isLoading} = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bookings')
            const data = await res.json()
            return data
        }
    })

    if(isLoading){
        return <Loader/>
    }
    return (
        <div>

            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    
    <thead>
      <tr>
        <th>No</th>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    {
    orders?.map((order, i) => <tr key={order._id}>
        <th>{i +1}</th>
        <td>
        <div className="avatar">
    <div className="w-16 rounded-full">
      <img src={order?.image} alt="chup"/>
    </div>
  </div>
        </td>
        <td className='text-xl font-semibold text-neutral'>{order?.productName}</td>
        <td className='font-bold'>${order?.productPrice}</td>
        <td>
          {order?.productPrice && !order?.paid &&
          <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-neutral'>Pay</button></Link>}
          {order?.productPrice && order?.paid && <span className='text-green-600 text-xl font-bold'>Paid</span>}
        </td>
      </tr>
    )
    }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;