import React from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AppledJobsAll = ({ sc }) => {
    const { job_img, job_name, company_name, job_time, job_type, location, salary, id } = sc;

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-between mb-14'>
            <div className="flex items-center justify-center   ">
                <img className='w-2/4 bg-slate-100' src={job_img} alt="" />
            </div>
            <div className='font-semibold'>
                <h2 className="card-title font-bold text-xl mb-2">{job_name}</h2>
                <p className=' text-lg mb-2'>{company_name}</p>
                <div className='flex gap-4 text-lg mb-2'>
                    <span className='p-2 rounded border border-indigo-600 text-indigo-400 '>{job_type}</span>
                    <span className='p-2 rounded border border-indigo-600 text-indigo-400'>{job_time}</span>
                </div>
                <div className='flex gap-4 text-lg mb-4'>
                    <span><IoLocationOutline className='inline-block'></IoLocationOutline> {location}</span>
                    <span><AiOutlineDollarCircle className='inline-block'></AiOutlineDollarCircle> Salary : {salary}</span>
                </div >
            </div>
            <div className='flex justify-center'>
                <Link to={`/feature/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppledJobsAll;