import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';

const FeatureDetails = () => {
    const [feature, setFeature] = useState([]);
    const [data] = useFetchData();
    // const featureData = useLoaderData();
    // console.log(featureData)
    // const id = useParams();
    // console.log(id)
    console.log(data)
    // useEffect(() => {
    //     fetch('feature.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    // console.log(feature);

    return (
        <div>
            <h2>this is details</h2>
        </div>
    );
};

export default FeatureDetails;