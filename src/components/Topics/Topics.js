import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const allTopics = useLoaderData();
    return (
        <div className='alltopics-container'>

            <div className='banner-container'>
                <h2>This is banner</h2>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
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