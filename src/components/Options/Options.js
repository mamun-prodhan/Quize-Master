import React from 'react';

const Options = ({quizIndex,option,index,quizHandler}) => {
    // console.log(option);
    return (
        <div className=''>
            <section className='border p-4 text-start'>
                <label>
                     <input type="radio" id={index} name={quizIndex} value={option} onClick={()=>quizHandler(option)}/>{option}
                </label>
            </section>
        </div>
    );
};

export default Options;