import React, { useState } from "react";
import Search from "../../assets/images/search.png"
import { IoIosArrowForward } from "react-icons/io";


const areas = [
  "Jeff Davis",
  "North Carolina",
  "EL Paso",
  "West Virginia",
  "Hudspeth",
  "California",
  "Missouri",
  "Clubeerson",
];

function SelectArea() {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchTerm("");
  };

  const handleSelect = (area) => {
    if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter((item) => item !== area));
    } else {
      setSelectedAreas([...selectedAreas, area]);
    }
  };

  const handleSelectAll = () => {
    if (selectedAreas.length === areas.length) {
      setSelectedAreas([]);
    } else {
      setSelectedAreas(areas);
    }
  };

  const filteredAreas = areas.filter((area) =>
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="relative w-96 mx-auto">
      {/* Dropdown button */}
      <button
        onClick={toggleDropdown}
        className="w-full rounded-full px-8 py-4 border border-gray-200  text-left flex justify-between items-center bg-gray-50 shadow-sm"
      >
        <div>
          <span className="text-gray-500">See areas selected</span>
          <p className="text-primary mt-1">
            {selectedAreas.length > 0
              ? selectedAreas.join(", ")
              : "No areas selected"}
          </p>
        </div>
        <IoIosArrowForward className="text-primary" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
       <div className="absolute top-full left-0  w-full mt-2 bg-[#f2f5fa] p-5 border border-gray-200 rounded-xl shadow-lg  z-10">
            {/* Search bar */}
          <div className="p-3 flex items-center border-b bg-white border-gray-200">
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
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50"
            onClick={handleSelectAll}
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 mr-2"
              checked={selectedAreas.length === areas.length}
              onChange={handleSelectAll}
            />
            <span className="text-gray-700">Select All</span>
          </div>

          {/* Area options */}
          {filteredAreas.map((area) => (
            <div
              key={area}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50"
              onClick={() => handleSelect(area)}
            >
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                checked={selectedAreas.includes(area)}
                onChange={() => handleSelect(area)}
              />
              <span className="text-gray-700">{area}</span>
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="w-1/2 mx-auto">
    {/* <StateMap/> */}
      map
  </div>
  </>
  );
}

export default SelectArea;
