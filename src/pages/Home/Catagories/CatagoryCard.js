import React from 'react';

const CatagoryCard = ({ catagory }) => {
    const { job_name, job_img, jobs } = catagory;

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={job_img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title font-bold text-xl">{job_name}</h2>
                <p>{jobs} jobs Available</p>
            </div>
        </div>
    );
};

export default CatagoryCard;