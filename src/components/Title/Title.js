import React from 'react';

const Title = ({children}) => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl text-neutral font-bold'>{children}</h2>
            <div className='w-28 mx-auto mt-3 bg-primary h-px'></div>
            <div className='w-20 mx-auto mt-1 bg-primary h-px'></div>
        </div>
    );
};

export default Title;