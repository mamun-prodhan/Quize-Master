import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetail = () => {
    const singleTopic = useLoaderData();
    
    const topicName = singleTopic.data.name;
    return (
        <div>
            <h2>Quiz of {topicName}</h2>
        </div>
    );
};

export default TopicDetail;