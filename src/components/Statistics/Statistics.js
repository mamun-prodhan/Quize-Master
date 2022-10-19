import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const questions = useLoaderData();


    const data = questions.data;


    console.log(data);
    return (
        <div>
            <h2>This is Statistics</h2>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis datakey="name" />
                <YAxis />
                <Tooltip></Tooltip>
                <Line type="monotone" dataKey="name" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;