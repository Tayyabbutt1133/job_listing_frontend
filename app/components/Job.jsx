"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import EditJobModal from "./EditJobModal";
import DeleteJobModal from "./DeleteJobModal";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
  const [deleteJob, setDeleteJob] = useState(null);

  const locations = useSelector((state) => state.filter.locations);
  const jobtype = useSelector((state) => state.filter.jobTypes);
  const postScope = useSelector((state) => state.filter.postScope);
  console.log("Post Scope value is : ", postScope);


  const getJobs = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (locations.length > 0) {
        locations.forEach((loc) => params.append("locations", loc));
      }
      if (jobtype.length > 0) {
        jobtype.forEach((jt) => params.append("jobTypes", jt));
      }

      if (postScope === '') {
        params.append("postscope", "newest")
      }
      else {
        params.append("postscope", postScope)
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs?${params.toString()}`
      );
      const data = response.data?.data || [];
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, [locations, jobtype, postScope]);

  const handleJobUpdated = () => {
    getJobs();
  };

  if (loading) return <Loader />;

  if (!loading && jobs.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No jobs found
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onEdit={setEditingJob}
            onDelete={setDeleteJob}
          />
        ))}
      </div>

      {editingJob && (
        <EditJobModal
          job={editingJob}
          onClose={() => setEditingJob(null)}
          onUpdated={handleJobUpdated}
        />
      )}

      {deleteJob && (
        <DeleteJobModal
          jobId={deleteJob}
          onClose={() => setDeleteJob(null)}
          onDeleted={handleJobUpdated}
        />
      )}
    </>
  );
};


export default Job;
