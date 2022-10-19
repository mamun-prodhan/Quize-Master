import React, { useState } from 'react';
import Options from '../Options/Options';

const Quiz = ({data, index}) => {
    // console.log(data);
    // console.log(index);
    const options = data.options;
    const quizIndex = index;
    // console.log(options);


    const quizHandler = (event) =>{
        console.log(event);
    }

    return (
        <div className='m-5 p-4 shadow p-3 mb-5 bg-body rounded'>
            <h4>Quiz {index + 1}: {data.question}</h4>
            {
                options.map((option, index)=> <Options
                key={index}
                index={index}
                quizIndex={quizIndex}
                option={option}
                quizHandler={quizHandler}
                ></Options>)
            }
        </div>
    );
};

export default Quiz;