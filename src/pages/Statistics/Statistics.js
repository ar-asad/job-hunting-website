import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, Pie, PieChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    console.log(data)

    return (
        // <ResponsiveContainer width={700} height="80%">
        //     <AreaChart className='my-20' width={750} height={250} data={data}
        //         margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        //         <defs>
        //             <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        //                 <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
        //                 <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        //             </linearGradient>
        //         </defs>
        //         <XAxis dataKey="name" />
        //         <YAxis />
        //         <CartesianGrid strokeDasharray="3 3" />
        //         <Tooltip />
        //         <Area type="monotone" dataKey="mark" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        //     </AreaChart>
        // </ResponsiveContainer>

        <ResponsiveContainer width='100%' height={300}>
            <AreaChart data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
                <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
                <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>

    );
};

export default Statistics;