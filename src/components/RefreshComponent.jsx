import React from "react";

const ClearFiltersButton = ({ onClearFilters }) => {
  return (
    <button onClick={onClearFilters} className="bg-blue-500 text-white p-2 rounded">
      Clear Filters
    </button>
  );
};

export default ClearFiltersButton;
