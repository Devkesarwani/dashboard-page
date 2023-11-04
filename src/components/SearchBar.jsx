import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="mb-4 relative w-96 h-8">
  <div className="relative flex">
    <input
      type="text"
      placeholder="Search Customer"
      className="p-2 border rounded-1-md w-full rounded-r-none"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button className="p-2 rounded-r-md -ml-10" onClick={handleSearch}>
      <FiSearch className="h-6 w-6" />
    </button>
  </div>
</div>

  );
};

export default SearchBar;
