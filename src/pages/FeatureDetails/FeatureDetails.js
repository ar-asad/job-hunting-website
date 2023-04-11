import React, { useEffect, useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from 'react-icons/io5';
import { addToDb } from '../../utilities/fakedb';


const FeatureDetails = () => {
    const [feature, setFeature] = useState({});
    const { Id } = useParams();

    const { description, education, experience, responsibility, id, salary, job_name, location } = feature;


    useEffect(() => {
        fetch('/feature.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    const unicData = data.find(d => d.id === Id)
                    setFeature(unicData)
                }
            })
    }, [Id])
    console.log(feature)

    const handleAddToLocalStorage = (id) => {
        addToDb(id)
    }

    return (
        <div className='my-20'>
            <h2 className='text-4xl font-bold mb-20 text-center'>Job Details</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 p-5'>
                <div className='col-span-2 text-xl'>
                    <p className='mb-8'><span className='font-bold'>Job Description : </span>{description}</p>
                    <p className='mb-8'><span className='font-bold'>Job Responsibility : </span>{responsibility}</p>
                    <p className='mb-6 font-bold'>Educational Requirements :</p>
                    <p className='mb-8'>{education}</p>
                    <p className='mb-6 font-bold'>Experiences : </p>
                    <p>{experience}</p>
                </div>
                <div>
                    <div className="card w-96 bg-indigo-50 ">
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">Job Details</h2>
                            <div className="divider my-0"></div>
                            <p className='text-xl'><AiOutlineDollarCircle className='inline-block'></AiOutlineDollarCircle> <span className='font-bold'>Salary :</span> {salary} (Per Month)</p>
                            <p className='text-xl'><SlCalender className='inline-block'></SlCalender> <span className='font-bold'>Job Title :</span> {job_name}</p>
                            <h2 className="card-title text-2xl font-bold mt-5">Job Details</h2>
                            <div className="divider my-0"></div>
                            <p className='text-xl'><BsTelephone className='inline-block'></BsTelephone> <span className='font-bold'>Phone :</span> 01755-00 22 33</p>
                            <p className='text-xl'><AiOutlineMail className='inline-block'></AiOutlineMail> <span className='font-bold'>Email :</span> jobs@gmail.com</p>
                            <p className='text-xl'><IoLocationOutline className='inline-block'></IoLocationOutline> <span className='font-bold'>Address :</span> Dhanmondi 32, Sukrabad {location}</p>
                            <div className="card-actions mt-8 ">
                                <button onClick={() => handleAddToLocalStorage(id)} className="btn btn-primary w-full">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FeatureDetails;