import React, { useEffect, useState } from 'react';
import AppledJobsAll from './AppledJobsAll';
import { getAppliedJob } from '../../utilities/fakedb';

const AppliedJobs = () => {

    const [allData, setAllData] = useState([])
    const [appliedJob, setAppliedJob] = useState([])
    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        fetch('/feature.json')
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            })
    }, []);

    useEffect(() => {
        const storedCart = getAppliedJob();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for (const id in storedCart) {
            // console.log(id)
            // step 2: get product from products state by using id
            const addedProduct = allData.find(product => product.id === id)

            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart

                savedCart.push(addedProduct);
            }
        }
        // step 5: set the cart
        setAppliedJob(savedCart)
        setJobs(savedCart)
    }, [allData])


    const handleChange = (e) => {
        const selectedJob = e.target.value;
        console.log(selectedJob)
        if (selectedJob === "Remote") {
            const remoteJob = appliedJob.filter(job => job.job_type === selectedJob)
            setJobs(remoteJob);
        }
        else if (selectedJob === 'Onsite') {
            const onsiteJob = appliedJob.filter(job => job.job_type === selectedJob)
            setJobs(onsiteJob)
        }
        else {
            setJobs(appliedJob)
        }
    };


    return (
        <div className='my-20'>
            <h2 className='text-4xl font-bold mb-32 text-center'>Applied Jobs</h2>
            <div className='text-right'>
                <select onChange={handleChange} className="select select-bordered mb-10 max-w-xs">
                    <option disabled selected>Filter By</option>
                    <option value='All'>All Job</option>
                    <option value='Remote'>Remote Job</option>
                    <option value='Onsite'>Onsite Job</option>
                </select>
                {
                    jobs.map(sc => <AppledJobsAll key={sc.id} sc={sc}></AppledJobsAll>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;