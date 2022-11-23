import {
    useQuery
} from '@tanstack/react-query';
import React from 'react';
import SubTitle from '../../../components/SubTitle/SubTitle';
import Title from '../../../components/Title/Title';
import CatCard from './CatCard';



const Category = () => {

    const {data: category = []} = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('product.json')
            const data = await res.json()
            return data;
        }
    })


    return (
        <div className='py-20 max-w-7xl mx-auto'>
          <SubTitle>Check Our Car List</SubTitle>
          <Title>Our Category</Title>

          <div className='grid grid-cols-3 text-center mt-10'>
            {category?.map(cat => <CatCard cat={cat}></CatCard>)}
          </div>
        </div>
    );
};

export default Category;