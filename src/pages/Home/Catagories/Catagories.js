import React, { useEffect, useState } from 'react';
import CatagoryCard from './CatagoryCard';

const Catagories = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('catagory.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])

    return (
        <div className='my-28 '>
            <div className='text-center'>
                <h2 className='text-5xl font-bold mb-4'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    catagories.map(catagory => <CatagoryCard key={catagory.id} catagory={catagory}></CatagoryCard>)
                }
            </div>
        </div>
    );
};

export default Catagories;