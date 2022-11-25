import { useQuery } from '@tanstack/react-query';
import React from 'react';
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
        <td>{order?.productName}</td>
        <td>{order?.productPrice}</td>
        <td><button className='btn btn-sm btn-success'>Pay</button></td>
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