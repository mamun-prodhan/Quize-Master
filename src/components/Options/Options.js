import React from 'react';

const Options = ({quizIndex,option,index,quizHandler}) => {
    // console.log(option);
    return (
        <div className=' text-start'>
                <label className='border border-primary w-100 p-3 m-2 bg-success bg-opacity-75'>
                     <input className='me-2' type="radio" id={index} name={quizIndex} value={option} onClick={()=>quizHandler(option)}/>{option}
                </label>
        </div>
    );
};

export default Options;