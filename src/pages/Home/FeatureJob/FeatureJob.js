import React, { useEffect, useState } from 'react';
import FeatureJobCards from './FeatureJobCards';


const FeatureJob = () => {
    const [features, setFeatures] = useState([]);
    const [isToggle, setToggle] = useState(false)



    const handleToggle = () => {
        setToggle(true)
    }

    useEffect(() => {
        fetch('/feature.json')
            .then(res => res.json())
            .then(data => {
                if (isToggle !== true) {
                    const sliceData = data.slice(0, 4)
                    setFeatures(sliceData)
                }
                else {
                    setFeatures(data)
                }
            })
    }, [isToggle]);



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
            </div>
            {
                isToggle !== true ? <div className='flex justify-center mt-10'>
                    <button onClick={handleToggle} className="btn btn-primary ">See All Jobs</button>
                </div> : ""
            }
        </div>
    );
};

export default FeatureJob;