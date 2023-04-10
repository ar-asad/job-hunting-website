import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Statistics from '../pages/Statistics/Statistics';
import AppliedJobs from '../pages/AppliedJobs/AppliedJobs';
import Blogs from '../pages/Blogs/Blogs';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/job',
                element: <AppliedJobs></AppliedJobs>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            }
        ]
    }
]);


export default router;