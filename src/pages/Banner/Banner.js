import React from 'react';
import img from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} alt='' className=" rounded-lg  " />
                <div>
                    <h1 className=" text-4xl lg:text-6xl font-bold">One Step <br /> Closer To Your <br /> <span className='text-blue-400'>Dream Job</span></h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;