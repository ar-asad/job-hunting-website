import React, { useEffect, useState } from 'react';
import FeatureJobCards from './FeatureJobCards';


const FeatureJob = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('feature.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    console.log(features)

    return (
        <div className='my-10'>
            <div className='text-center mb-10'>
                <h2 className='text-5xl font-bold mb-4'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                {
                    features.map(feature => <FeatureJobCards key={feature.id} feature={feature}></FeatureJobCards>)
                }
                <button>see all</button>
            </div>
        </div>
    );
};

export default FeatureJob;