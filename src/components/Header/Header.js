import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='p-3  bg-success text-dark bg-opacity-75 d-flex justify-content-between align-items-center'>
            <div>
                <h3 className='fw-bold'>Skill Tester</h3>
            </div>
            <div>
                <Link to='/' className='text-decoration-none me-3 text-dark fw-semibold'>Topics</Link>
                <Link to='/statistics' className='text-decoration-none me-3 text-dark fw-semibold'>Statistics</Link>
                <Link to='/blog'  className='text-decoration-none me-3 text-dark fw-semibold'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;