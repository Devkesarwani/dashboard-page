// ResetButton.jsx
import React from "react";
import { FiRefreshCcw } from "react-icons/fi";

const ResetButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 ml-2 bg-blue-500 text-white rounded"
    >
      <FiRefreshCcw className="h-5 w-5" />
    </button>
  );
};

export default ResetButton;
