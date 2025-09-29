"use client"
import React from "react";

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full py-10">
            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

            {/* Loading text with dots */}
            <p className="mt-4 text-lg font-medium text-gray-600 flex items-center gap-1">
                Please wait a sec
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-150">.</span>
                <span className="animate-bounce delay-300">.</span>
            </p>
        </div>
    );
};

export default Loader;
