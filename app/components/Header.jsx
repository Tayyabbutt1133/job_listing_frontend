import React from "react";
import Addjob from "./Addjob";
import { lexendDeca } from "./font";

const Header = () => {
    return (
        <nav className={`border-b border-stone-300 ${lexendDeca.className}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold tracking-tight">Jobify</h1>

                <div className="hidden md:flex space-x-8 text-white font-medium">
                    <a href="#" className="hover:text-gray-300 transition">Home</a>
                    <a href="#" className="hover:text-gray-300 transition">Jobs</a>
                    <a href="#" className="hover:text-gray-300 transition">Companies</a>
                    <a href="#" className="hover:text-gray-300 transition">About</a>
                </div>
                <div>
                    <Addjob />
                </div>
            </div>
        </nav>
    );
};

export default Header;
