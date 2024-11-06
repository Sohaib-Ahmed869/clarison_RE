import React from "react";
import SelectStates from "./SelectStates";
import Model from "./Model";
import { NavLink } from "react-router-dom";

const FilterAudience = () => {
  return (
    <div className="flex items-center h-full w-full flex-col gap-10 p-5">
      <div className="h-5/6 w-full flex items-center py-10 gap-10 flex-col rounded-3xl bg-white">
        <h1 className="text-xl sm:text-3xl text-center w-full font-semibold text-secondary">
          Filter your Audience
        </h1>
        <SelectStates />

        <div className="flex gap-5 w-5/6 text-center">Map</div>
        <div className="flex gap-5 w-full bg items-center justify-center">
        <NavLink className="w-2/6 " to="/user/my-targeted-audience">
          <button className="bg-transparent w-full border border-primary text-primary h-14 text-base rounded-lg flex gap-2 items-center justify-center mt-5">
            Cancel
          </button>
        </NavLink>

        <NavLink className="w-2/6 " to="/user/my-targeted-audience/select-market">
        <button
        
          className="bg-primary hover:bg-opacity-80 w-full text-white h-14 text-base rounded-lg flex gap-2 items-center justify-center mt-5"
        >
          Next
        </button>
        </NavLink>

        {/* model  */}
       
      </div>
      </div>
    </div>
  );
};

export default FilterAudience;
