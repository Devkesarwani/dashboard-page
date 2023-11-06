import React, { useState } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

const SortButton = ({ onSort }) => {
  const [sortOrder, setSortOrder] = useState(1); // Start with descending order (Z to A)

  const handleSortClick = () => {
    const newSortOrder = sortOrder === 1 ? 0 : 1;
    setSortOrder(newSortOrder);
    onSort(newSortOrder);
  };

  return (
    <button
      onClick={handleSortClick}
      className="p-2 ml-2 bg-blue-500 text-white rounded"
    >
      {sortOrder === 1 ? (
        
        <AiOutlineSortAscending className="h-5 w-5" />
      ) : (
        <AiOutlineSortDescending className="h-5 w-5" />
      )}
    </button>
  );
};

export default SortButton;
