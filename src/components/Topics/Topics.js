import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'
import image from '../../image/bg3.jpg'

const Topics = () => {
    const allTopics = useLoaderData();
    const topics = allTopics.data;
    return (
        <div className='alltopics-container'>

            <div className='banner-container'>
                <div>
                    <img className='img-fluid' src={image} alt="" />
                </div>
            </div>

            <div className="row row-cols-1 mb-5 row-cols-md-2 row-cols-lg-4 g-4">
            {
                topics.map(topic => <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
            </div>
        </div>
    );
};

export default Topics;