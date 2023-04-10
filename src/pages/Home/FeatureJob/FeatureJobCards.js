import React from 'react';

const FeatureJobCards = ({ feature }) => {
    const { company_name, job_name, id, job_time, job_type, location, salary, job_img } = feature;
    return (
        <div className="card border border-slate-200">
            <figure className="px-10 pt-10 grid justify-items-start ">
                <img src={job_img} alt="" className="rounded-xl w-4/12" />
            </figure>
            <div className="card-body font-semibold ">
                <h2 className="card-title font-bold text-xl">{job_name}</h2>
                <p>{company_name}</p>
                <div className='flex gap-4'>
                    <span className='p-2 rounded border border-indigo-600 text-indigo-400 '>{job_type}</span>
                    <span className='p-2 rounded border border-indigo-600 text-indigo-400'>{job_time}</span>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureJobCards;