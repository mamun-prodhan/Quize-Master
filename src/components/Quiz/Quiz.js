import React, { useState } from 'react';
import Options from '../Options/Options';

const Quiz = ({data, index}) => {
    // console.log(data);
    // console.log(index);
    const options = data.options;
    const quizIndex = index;
    const correctAnswer = data.correctAnswer;
    console.log(correctAnswer);
    // console.log(options);
    const [quizvalue, setQuizvalue] = useState();

    // console.log(quizvalue);

    const quizHandler = (event) =>{
        console.log(event);
        if(event === correctAnswer){
            alert('correct');
        }
        else{
            alert('wrong');
        }
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