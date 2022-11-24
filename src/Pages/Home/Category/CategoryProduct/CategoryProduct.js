import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductCard from './CategoryProductCard';
const CategoryProduct = () => {
    const cars = useLoaderData()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10 py-20'>
    
         {
            cars?.map(car => <CategoryProductCard
            key={car._id} car={car}
            ></CategoryProductCard>)
         }
      
        </div>
    );
};

export default CategoryProduct;