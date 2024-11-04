import React from "react";
import rightArrow from "../../assets/dataTable/right.png";
import leftArrow from "../../assets/dataTable/left.png";

export default function CustomPagination({
  count,
  page,
  rowsPerPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(count / rowsPerPage);

  const handlePrevious = () => {
    if (page > 0) {
      onPageChange(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      onPageChange(page + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="flex justify-between items-center gap-2 mt-4 p-4">
      <button
        onClick={handlePrevious}
        disabled={page === 0}
        className={`px-3 py-2  gap-2 flex items-center justify-center border   border-[#858D9D] rounded-xl ${
          page === 0
            ? "text-gray-400   border border-gray-200  cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        <img src={leftArrow} className={`w-5 ${page === totalPages - 1 ?"": "opacity-40"} `} alt="left arrow" />
        Previous
      </button>

      <div className="flex items-center justify-center flex-wrap">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index)}
            className={`px-4 py-2 rounded-md ${
              index === page
                ? "bg-[#F7F9FC] text-secondary"
                : "text-[#858D9D] hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={page === totalPages - 1}
        className={`px-3 py-2 flex gap-2 items-center justify-center border border-[#858D9D] rounded-xl ${
          page === totalPages - 1
            ? "text-gray-400   border border-gray-200  cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        Next
        <img
          src={rightArrow}
          className={`w-5 ${page === totalPages - 1 ? "opacity-40" : ""} `}
          alt="right arrow"
        />
      </button>
    </div>
  );
}
