import React from 'react';

const Topic = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div>
            <h2>{name}</h2>
            <p>Number of Questions: {total}</p>
            <img src={logo} alt="" />
        </div>
    );
};

export default Topic;