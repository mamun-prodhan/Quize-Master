import React from 'react';
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
                    <button type="button" class="btn btn-outline-primary fw-bold">Start Practice</button>
                </div>
            </div>
        </div>

    );
};

export default Topic;