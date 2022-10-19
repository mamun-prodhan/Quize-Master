import React from 'react';

const Quiz = ({data, index}) => {
    console.log(data);
    console.log(index);
    return (
        <div>
            <div className='border border-primary p-3 m-3'>
                <h3>Quiz {index + 1}: {data.question}</h3>
            </div>
        </div>
    );
};

export default Quiz;