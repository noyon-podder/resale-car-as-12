import {
    useQuery
} from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../components/Loader/Loader';


const MyProduct = () => {
    const {data: products = [], isLoading, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-product')
            const data = await res.json()
            return data
        }
    })

    const handleProductDelete = id => {
        
        fetch(`http://localhost:5000/all-product/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                console.log(data)
                refetch()
                toast.success('Deleted Successfully')
            }
           
        })
    }

    if(isLoading){
        return <Loader/>
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Sales Status</th>
        <th>Advertise</th>
        <th>Sales Status</th>

      </tr>
    </thead>
    <tbody>
    {products.map((product, i) => <tr key={i}>
        <th>{i +1}</th>
        <td>{product.name}</td>
        <td>{product.resalePrice}</td>
        <td>
            <button className='btn btn-xs btn-success'>Available</button>
        </td>
        <td>
            <button className='btn btn-warning btn-sm'>Advertise</button>
        </td>
        <td>
            <button className='btn btn-sm btn-error' onClick={() => handleProductDelete(product._id)}>Delete</button>
        </td>
      </tr>)} 
      
      
    </tbody>
  </table>
</div>
           
        </div>
    );
};

export default MyProduct;