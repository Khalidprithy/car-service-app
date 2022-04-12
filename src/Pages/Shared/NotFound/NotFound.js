import React from 'react';
import cat from '../../../images/cat.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Sleeping Mechanic</h2>
            <img className='w-100' src={cat} alt="" />
        </div>
    );
};

export default NotFound;