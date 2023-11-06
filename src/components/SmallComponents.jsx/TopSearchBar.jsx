import React from "react";
import { FiSearch } from "react-icons/fi";

const TopSearchBar = () => {

  return (
    <div className="mb-4 relative w-96 h-8">
      <div className="relative flex">
        <input
          type="text"
          placeholder="Search Customer"
          className="p-2 border rounded-1-md w-full rounded-full"
        />
        <button className="p-4 rounded-r-md -ml-16">
          <FiSearch className="h-7 w-7 bg-slate-100 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default TopSearchBar;
