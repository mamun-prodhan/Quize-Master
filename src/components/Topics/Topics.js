import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const allTopics = useLoaderData();
    return (
        <div className='alltopics-container'>

            <div className='banner'>
                <h2>This is banner</h2>
            </div>

            <div className="topic-container">
            {
                allTopics.map(topic => <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
            </div>
            
        </div>
    );
};

export default Topics;