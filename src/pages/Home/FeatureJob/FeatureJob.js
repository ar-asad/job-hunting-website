import React, { useEffect, useState } from 'react';
import FeatureJobCards from './FeatureJobCards';

const FeatureJob = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('feature.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])

    return (
        <div className=''>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                {
                    features.map(feature => <FeatureJobCards key={feature.id} feature={feature}></FeatureJobCards>)
                }
            </div>
        </div>
    );
};

export default FeatureJob;