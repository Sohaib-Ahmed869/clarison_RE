import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Search from "../../assets/images/search.png";


const states = [
  "New Hampshire",
  "North Carolina",
  "Texas",
  "West Virginia",
  "Mississippi",
  "California",
  "Missouri",
  "Oregon",
];

function SelectStates() {
  const [selectedStates, setSelectedStates] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchTerm("");
  };

  const handleSelect = (state) => {
    if (selectedStates.includes(state)) {
      setSelectedStates(selectedStates.filter((item) => item !== state));
    } else {
      setSelectedStates([...selectedStates, state]);
    }
  };

  const handleSelectAll = () => {
    if (selectedStates.length === states.length) {
      setSelectedStates([]);
    } else {
      setSelectedStates(states);
    }
  };

  const filteredStates = states.filter((state) =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-96">
      {/* Dropdown button */}
      <button
        onClick={toggleDropdown}
        className="w-full px-8 py-4 border border-gray-200 rounded-full  text-left flex justify-between items-center bg-gray-50 shadow-sm"
      >
        <div>
          <span className="text-gray-700">See states selected</span>
          <p className="text-primary mt-1">
            {selectedStates.length > 0
              ? selectedStates.join(", ")
              : "No states selected"}
          </p>
        </div>
        <IoIosArrowForward className="text-primary" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0  w-full mt-2 bg-[#f2f5fa] p-5 border border-gray-200 rounded-xl shadow-lg  z-10">
          
          {/* Search bar */}
          <div className="p-3 flex items-center bg-white rounded-xl border-b border-gray-200">
            <img src={Search} alt="search icon" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-2 py-1 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Select All option */}
          <div
            className="flex items-center  px-4 py-2 cursor-pointer hover:bg-gray-50"
            onClick={handleSelectAll}
          >
            <input
            
              type="checkbox"
              className="form-checkbox  h-5 w-5 text-blue-600 mr-2"
              checked={selectedStates.length === states.length}
              onChange={handleSelectAll}
            />
            <span className="text-gray-700">Select All</span>
          </div>

          {/* State options */}
          {filteredStates.map((state) => (
            <div
              key={state}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50"
              onClick={() => handleSelect(state)}
            >
              <input
                type="checkbox"
                className="form-checkbox  h-5 w-5 text-blue-600 mr-2"
                checked={selectedStates.includes(state)}
                onChange={() => handleSelect(state)}
              />
              <span className="text-gray-700">{state}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectStates;
