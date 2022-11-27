import React from 'react';
import About from '../About/About';
import Advertises from '../Advertises/Advertises';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
              
           <Banner/>
           <About/>
           <Advertises/>
           <Category/>
          
        </div>
    );
};

export default Home;