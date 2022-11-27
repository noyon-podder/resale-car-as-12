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

    const handleAdvertiseButton = product => {
       fetch('http://localhost:5000/advertises', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
       })
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
           {
            product.paid ? <span className='text-primary font-semibold '>Sold</span> : <span className='text-green-600 font-semibold'>Available</span>
           }
        </td>
        <td>
            <button className='btn btn-warning btn-sm'
             onClick={() => handleAdvertiseButton(product)}
             disabled={product.paid}
             >Advertise</button>
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