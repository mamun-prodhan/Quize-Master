import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/error.png'

const NotFound = () => {
    return (
        <div>
            <h3 className='mt-2'>Page Not Found</h3>
            <Link to='/' className='text-decoration-none m-3 fw-bold btn btn-outline-primary'>Back To Home</Link>
            <div>
                    <img className='img-fluid' src={image} alt="" />
            </div>
        </div>
    );
};

export default NotFound;