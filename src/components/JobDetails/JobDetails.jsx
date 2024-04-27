import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob = () => {
        toast('You have applied successfully.')
    }

    return (
        <div>
            <h2>Job details of: {job.job_title}</h2>
            <div className="grid gap-4 mb-5 mt-5 md:grid-cols-4">
                <div className="border p-3 md:col-span-3">
                    <p><span className="text-xl font-semibold">Job Description: </span>
                    {job.job_description}
                    </p>
                    <p className="pt-7 pb-7"><span className="text-xl font-semibold">Job Responsibility: </span>
                    {job.job_responsibility}
                    </p>
                    <p className="text-xl font-semibold pb-5">Educational Requirements:</p>
                    <p>{job.educational_requirements}</p>
                    <p className="text-xl font-semibold pt-7 pb-5">Experience</p>
                    <p>{job.experiences}</p>
                </div>
                <div className="border p-3">
                    <h2 className="text-2xl font-semibold pb-4">Job Details</h2>
                    <hr />
                    <button onClick={handleApplyJob}
                      className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;