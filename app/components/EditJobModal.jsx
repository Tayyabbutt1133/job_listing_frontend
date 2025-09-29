import React, { useState } from "react";
import axios from "axios";

const EditJobModal = ({ job, onClose, onUpdated }) => {
    const [formData, setFormData] = useState(job);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.put(
                `http://localhost:5000/jobs/${formData.id}`,
                formData
            );

            onUpdated(true);

            onClose();
        } catch (error) {
            console.error("Error updating job:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold text-black mb-4">Edit Job</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-black">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title || ""}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-black">Company</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company || ""}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-black">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location || ""}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-black">Tags</label>
                        <input
                            type="text"
                            name="tags"
                            value={formData.tags || ""}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold"
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-black font-bold"
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-bold"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditJobModal;
