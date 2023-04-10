import React from 'react';
import Banner from '../Banner/Banner';
import Catagories from './Catagories/Catagories';
import FeatureJob from './FeatureJob/FeatureJob';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <FeatureJob></FeatureJob>
        </div>
    );
};

export default Home;