import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='p-3  bg-success text-dark bg-opacity-75 d-lg-flex d-md-flex justify-content-between align-items-center'>
            <div>
                <h3 className='fw-bold'>Quiz Master</h3>
            </div>
            <div>
                <Link to='/' className='text-decoration-none me-3 fw-bold btn btn-outline-primary'>Home</Link>
                <Link to='/statistics' className='text-decoration-none me-3 fw-bold btn btn-outline-primary'>Statistics</Link>
                <Link to='/blog'  className='text-decoration-none me-3 fw-bold btn btn-outline-primary'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;