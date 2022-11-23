import React from 'react';

const SubTitle = ({children}) => {
    return (
        <div>
            <h4 className='text-center text-secondary text-xl'>{children}</h4>
        </div>
    );
};

export default SubTitle;