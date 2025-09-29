import React from "react";
import Job from "./Job";
import Filter from "./Filter";

const Listing = () => {
  return (
    <>
      <div className="flex gap-11 my-8 md:flex-row flex-col">
        <div className="w-64 shrink-0">
          <Filter />
        </div> 
        <div className="flex-1">
          <Job />
        </div>
      </div>

    </>
  );
};

export default Listing;
