import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div>
     <div className="center">
     <div className="container">
       <div className="ring"></div>
       <div className="ring"></div>
       <div className="ring"></div>
       <span>Loading..</span>
     </div>
     </div>
    </div>
    );
};

export default Loader;