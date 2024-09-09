import { useState } from "react";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [readMore, setReadMore] = useState(false);

  let description = job.description;

  if (!readMore) {
    description = job.description.substring(0, 90) + "...";
  }

  return (
    <>
      <div className="relative bg-white shadow-md rounded-xl" key={job.id}>
        {console.log(job.id)}
        <div className="p-4">
          <div className="mb-6">
            <div className="my-2 text-gray-600">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          <div className="mb-3">{description}</div>
          <button
            onClick={() => setReadMore((setReadMore) => !setReadMore)}
            className="inline-block text-blue-600 hover:underline"
          >
            {readMore ? "Less" : "More"}
          </button>

          <h3 className="mb-2 text-indigo-500">{job.salary} / Year</h3>

          <div className="mb-5 border border-gray-100"></div>

          <div className="flex flex-col justify-between mb-4 lg:flex-row">
            <div className="mb-3 text-orange-700">
              <i className="text-lg fa-solid fa-location-dot"></i>
              {job.location}
            </div>
            <Link
              to={`/jobsPage/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
