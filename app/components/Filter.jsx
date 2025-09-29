"use client"
import React, { useEffect, useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosCheckboxOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setLocations, setJobTypes, setPostScope } from "../slices/filter.slice";
import { lexendDeca } from "./font";

const Filter = () => {
  const country = ["Pakistan", "USA", "Europe"];
  const job_type = ["Part-time", "Full-time", "Contract", "Freelance"];

  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedScope, setSelectedScope] = useState([]);

  const dispatch = useDispatch();

  const toggleChecks = (value, allselectedValues, setSelectedValue) => {
    if (allselectedValues.includes(value)) {
      setSelectedValue(allselectedValues.filter((item) => item !== value));
    } else {
      setSelectedValue([...allselectedValues, value]);
    }
  };

  useEffect(() => {
    dispatch(setLocations(selectedCountry));
  }, [selectedCountry, dispatch]);

  useEffect(() => {
    dispatch(setJobTypes(selectedJobType));
  }, [selectedJobType, dispatch]);

  useEffect(() => {
    dispatch(setPostScope(selectedScope));
  }, [selectedScope, dispatch]);





  const FilterOption = ({ label, isSelected, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-slate-800  transition ${
        isSelected ? "font-semibold text-blue-600" : "text-white"
      }`}
    >
      {isSelected ? <IoIosCheckboxOutline size={20} /> : <MdCheckBoxOutlineBlank size={20} />}
      {label}
    </button>
  );

  return (
    <div className={`space-y-6 ${lexendDeca.className} p-4 bg-blue-950 shadow rounded-2xl w-64`}>
      {/* Location filter */}
      <div className="space-y-2 ">
        <h2 className="text-lg font-bold border-b pb-1">Location</h2>
        {country.map((coun, id) => (
          <FilterOption
            key={id}
            label={coun}
            isSelected={selectedCountry.includes(coun)}
            onClick={() => toggleChecks(coun, selectedCountry, setSelectedCountry)}
          />
        ))}
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-bold border-b pb-1">Job Type</h2>
        {job_type.map((type, id) => (
          <FilterOption
            key={id}
            label={type}
            isSelected={selectedJobType.includes(type)}
            onClick={() => toggleChecks(type, selectedJobType, setSelectedJobType)}
          />
        ))}
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-bold border-b pb-1">Job Scope</h2>
        <FilterOption
          label="Oldest"
          isSelected={selectedScope.includes("Oldest")}
          onClick={() => toggleChecks("Oldest", selectedScope, setSelectedScope)}
        />
      </div>

      <button
        onClick={() => {
          setSelectedCountry([]);
          setSelectedJobType([]);
          setSelectedScope([]);
        }}
        className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-2 rounded-lg transition"
      >
        Clear All
      </button>
    </div>
  );
};

export default Filter;
