import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className='col'>
            <div className="card  bg-success text-dark bg-opacity-25">
                <img className="bd-placeholder-img card-img-top" src={logo} alt="" />
                <div className="card-body  bg-success text-dark bg-opacity-50">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <p className="card-text">Total Question: {total}</p>
                    <Link to={`/quiz/${id}`}> <button type="button" className="btn btn-outline-primary fw-bold">Start Practice</button> </Link>
                </div>
            </div>
        </div>

    );
};

export default Topic;