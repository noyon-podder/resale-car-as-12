import {
    useQuery
} from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../components/Loader/Loader';
import SubTitle from '../../../components/SubTitle/SubTitle';
import Title from '../../../components/Title/Title';
import AdvertiseCard from './AdvertiseCard';


const Advertises = () => {

    const {data: advertises = [], isLoading, refetch} = useQuery({
        queryKey: ['advertises'],
        queryFn: async () => {
            const res = await fetch('https://resale-server-two.vercel.app/advertises')
            const data = await res.json()
            return data
        }
    })

    if(isLoading){
        return <Loader/>
    }
    return (
       <div className='max-w-7xl mx-auto'>
        {
            advertises.length !== 0 &&

            <div className='py-20'>
            <SubTitle>Here is Big offer for you </SubTitle>
            <Title>Advertises of Product</Title>

            <div className='grid grid-cols-1 lg:grid-cols-3 mt-10'>
                {advertises.map(ad => <AdvertiseCard
                key={ad._id}
                advertise={ad}
                ></AdvertiseCard>)}
            </div>
        </div>
        }       
       </div>
    );
};

export default Advertises;