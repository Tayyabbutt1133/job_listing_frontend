"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { lexendDeca } from "@/app/components/font";

const AddCreateJob = () => {

    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        posting_date: "",
        job_type: "",
        tags: "",
    });

    const [errors, setErrors] = useState({});
    const router = useRouter()

    const validate = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.company.trim()) newErrors.company = "Company is required";
        if (!formData.location.trim()) newErrors.location = "Location is required";
        if (!formData.posting_date.trim()) newErrors.posting_date = "Posting date is required";
        if (!formData.job_type.trim()) newErrors.job_type = "Job type is required";
        if (!formData.tags.trim()) newErrors.tags = "At least one tag is required";
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});

        try {
            const payload = {
                ...formData,
                posting_date: new Date(formData.posting_date).toLocaleString(),
                tags: formData.tags,
            };

            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs`, payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (response.status === 200) {
                router.push('/')

                setFormData({
                    title: "",
                    company: "",
                    location: "",
                    posting_date: "",
                    job_type: "",
                    tags: "",
                });
            }
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div className={`max-w-lg mx-auto p-6 ${lexendDeca.className}`}>
            <h2 className="text-xl font-semibold mb-6 text-white">Create Job</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                {["title", "company", "location", "posting_date", "job_type", "tags"].map((field) => (
                    <div key={field}>
                        <label className="block text-sm font-medium mb-1 text-white">
                            {field.replace("_", " ").toUpperCase()}
                        </label>
                        {field === "job_type" ? (
                            <select
                                name="job_type"
                                value={formData.job_type}
                                onChange={handleChange}
                                className="w-full text-black placeholder-gray-500 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                            >
                                <option value="">Select Job Type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                        ) : (
                            <input
                                type={field === "posting_date" ? "date" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                placeholder={field === "tags" ? "e.g. React, Node.js, Remote" : `Enter ${field}`}
                                className="w-full text-black placeholder-gray-500 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                            />
                        )}
                        {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Save Job
                </button>
            </form>
        </div>
    );
};

export default AddCreateJob;
