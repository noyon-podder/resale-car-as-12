import axios from 'axios';
import React, { useState } from 'react';
import SubTitle from '../../../components/SubTitle/SubTitle';
import Title from '../../../components/Title/Title';
import CatCard from './CatCard/CatCard';


const Category = () => {
    const [category, setCategory] = useState([])
    // const {data: category = []} = useQuery({
    //     queryKey: ['category'],
    //     queryFn: async () => {
    //         const res = await fetch('')
    //         const data = await res.json()
    //         return data;
    //     }
    // })
    axios.get('http://localhost:5000/category')
    .then(function (response) {
      // handle success
      console.log(response);
      setCategory(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    

    return (
        <div className='py-20 max-w-7xl mx-auto'>
          <SubTitle>Check Our Car List</SubTitle>
          <Title>Our Category</Title>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mt-10'>
            {category?.map(cat => <CatCard cat={cat}></CatCard>)}
          </div>
        </div>
    );
};

export default Category;