import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetail = () => {
    const singleTopic = useLoaderData();

    const topicName = singleTopic.data.name;
    const quizzes = singleTopic.data.questions;
    // console.log(quizzes);
    return (
        <div>
            <h2 className='m-4 text-success'>Quiz of {topicName}</h2>
            {
                quizzes.map((data, index) => <Quiz
                    key={data.id}
                    data={data}
                    index={index}
                ></Quiz>)
            }
        </div>
    );
};

export default TopicDetail;