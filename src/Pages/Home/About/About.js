import React from 'react';
import aboutImage from '../../../images/11.png';
const About = () => {
    return (
        <div className='pt-20 max-w-7xl mx-auto'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8'>
            <div>
                <div>
                    <h2 className='uppercase font-bold text-neutral text-2xl'>About Cardealer</h2>
                    <div className='w-10 h-1 bg-primary mt-1'></div>
                </div>
                <div className='mt-12 mb-8 flex gap-8'>
                    <span className='text-primary font-bold text-4xl'>50</span>
                    <h5 className='text-xl font-bold text-secondary'>Everything you need to build an amazing dealership for CarDealer team</h5>
                </div>
                <p className='text-secondary font-normal'>Authoritatively transition impactful web-readiness through B2C potentialities. Conveniently leverage existing unique customer service for state of the.Objectively optimize out-of-the-box e-commerce whereas viral value. Synergistically utilize corporate infrastructures with.</p>
            </div>
            <div className='md:mt-10'>
                <img src={aboutImage} alt="" />
            </div>
           </div>
        </div>
    );
};

export default About;