import React from "react";
import {
  FiEdit,
  FiTrash2,
  FiCalendar,
  FiBriefcase,
  FiMapPin,
} from "react-icons/fi";
import { lexendDeca } from "./font";

const JobCard = ({ job, onEdit, onDelete }) => {
  return (
    <div
      className={`bg-gradient-to-br from-slate-900 via-slate-700 to-gray-600 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between ${lexendDeca.className}`}
    >
      <div>
        <h2 className="text-xl font-semibold text-white">{job.title}</h2>
        <p className="text-white text-sm mt-1">{job.company}</p>
        <div className="flex items-center gap-1 text-white text-sm mt-3">
          <FiMapPin size={14} />
          <span>{job.location}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-100 font-medium shadow-sm">
            <FiBriefcase size={12} /> {job.job_type}
          </span>

          {Array.isArray(job.tags)
            ? job.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-50 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200 font-medium hover:bg-gray-100 transition"
              >
                {tag}
              </span>
            ))
            : (
              <span className="inline-block bg-gray-50 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200 font-medium">
                {job.tags}
              </span>
            )}
        </div>
        <p className="text-white text-xs mt-5 flex items-center gap-1">
          <FiCalendar size={14} /> Posted on: {job.date}
        </p>
      </div>
      <div className="flex justify-end gap-3 mt-6 flex-wrap">
        <button
          onClick={() => onEdit(job)}
          className="flex items-center gap-1 px-4 py-2 text-sm border border-yellow-300 text-yellow-600 rounded-lg hover:bg-yellow-400 hover:text-white shadow-sm transition"
        >
          <FiEdit size={15} /> Edit
        </button>
        <button
          onClick={() => onDelete(job.id)}
          className="flex items-center gap-1 px-4 py-2 text-sm border border-red-300 text-red-600 rounded-lg hover:bg-red-500 hover:text-white shadow-sm transition"
        >
          <FiTrash2 size={15} /> Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
