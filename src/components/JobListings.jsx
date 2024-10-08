import { useEffect, useState } from "react";
import JobListing from "./JobListing";

const JobListings = ({ isHome }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetch(
          isHome
            ? "https://database2-ocx4.onrender.com/jobs?_limit=3"
            : "https://database2-ocx4.onrender.com/jobs"
        );
        setJobs(await response.json());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, []);

  if (loading) {
    return <h1 className="text-3xl text-center"> Loading....</h1>;
  }

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListings;
