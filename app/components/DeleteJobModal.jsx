import React, { useState } from "react";
import axios from "axios";

const DeleteJobModal = ({ jobId, onClose, onDeleted }) => {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        try {
            await axios.delete(`http://localhost:5000/jobs/${jobId}`);
            onDeleted(true); // tell parent job was deleted
            onClose();
        } catch (error) {
            console.error("Error deleting job:", error);
            onDeleted(false); // deletion failed
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
                <h2 className="text-xl font-bold text-black mb-4">
                    Confirm Deletion
                </h2>
                <p className="text-black font-bold mb-6">
                    Are you sure you want to delete this job?
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-black font-bold"
                    >
                        No
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={loading}
                        className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 disabled:opacity-50"
                    >
                        {loading ? "Deleting..." : "Yes"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteJobModal;
