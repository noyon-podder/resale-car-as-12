import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';


const MyProduct = () => {

    const [products, setProducts] = useState([])
    const {user} = useContext(AuthContext)
    const url = `https://resale-server-two.vercel.app/all-product?email=${user?.email}`
  
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            setProducts(data)
        })
    },[url])



    const handleProductDelete = id => {
        
        fetch(`https://resale-server-two.vercel.app/all-product/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                console.log(data)
                toast.success('Deleted Successfully')
            }
           
        })
    }



    const handleAdvertiseButton = product => {
       fetch('https://resale-server-two.vercel.app/advertises', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
       })
       .then(res => res.json())
       .then(data => {
       if(data.acknowledged){
            toast.success('Advertise Successfully')
       }
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