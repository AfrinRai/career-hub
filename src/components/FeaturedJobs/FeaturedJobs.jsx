import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    // This is not the best way to load show all data :-
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div className="my-8">
            <h2 className="text-5xl text-center">Featured Jobs: {jobs.length}</h2>
            <p className="text-center">
                Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button
                    onClick={() => setDataLength(jobs.length)}
                    className="btn btn-primary bg-gradient-to-r from-indigo-500 to-purple-500 ...">
                    Show all jobs
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;