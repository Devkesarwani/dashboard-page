import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import SearchBar from "./SearchBar";
import userData from "../userData.json";
import TablebodyContent from "./TablebodyContent";
import Component2 from "./SmallComponents.jsx/Component2";
import TableHeader from "./TableHeaderCompoent";
import ResetButton from "./ResetButton";
import SortButton from "./SortButton";

const TableComponent = () => {
  const data = userData.users;

  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 6;
  const [sortOrder, setSortOrder] = useState(1);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  // Filters
  const [selectedKycStatus, setSelectedKycStatus] = useState([]);
  const [selectedZone, setSelectedZone] = useState([]);
  const [selectedAccountType, setSelectedAccountType] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const sortedData = data.slice().sort((a, b) => {
    if (sortOrder === 1) {
      return a.customerName.localeCompare(b.customerName);
    } else {
      return b.customerName.localeCompare(a.customerName);
    }
  });

  const filteredDataWithFilters = sortedData
    .filter((item) => {
      return (
        (selectedKycStatus.length === 0 || selectedKycStatus.includes(item.kycStatus)) &&
        (selectedZone.length === 0 || selectedZone.includes(item.zone)) &&
        (selectedAccountType.length === 0 || selectedAccountType.includes(item.accountType)) &&
        (!searchTerm ||
          item.customerName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    })
    .slice(pageNumber * perPage, (pageNumber + 1) * perPage);

  const resetFilters = () => {
    setSelectedKycStatus([]);
    setSelectedZone([]);
    setSelectedAccountType([]);
    setSearchTerm("");
  };

  return (
    <div className="p-4">
      <Component2 />

      <div className="text-black text-lg font-medium">Consumers Overview</div>

      <div className="flex mb-4">
        <SearchBar
          onSearch={(searchTerm) => {
            setSearchTerm(searchTerm);
          }}
        />
        <ResetButton onClick={resetFilters} />
        <SortButton onSort={setSortOrder} />
      </div>

      <table className="table-fixed w-screen">
        <thead>
          <TableHeader
            selectedKycStatus={selectedKycStatus}
            setSelectedKycStatus={setSelectedKycStatus}
            selectedZone={selectedZone}
            setSelectedZone={setSelectedZone}
            selectedAccountType={selectedAccountType}
            setSelectedAccountType={setSelectedAccountType}
            onSort={setSortOrder}
          />
        </thead>

        <tbody>
          <TablebodyContent val={filteredDataWithFilters} />
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(data.length / perPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={"flex justify-center items-center space-x-3 mt-5"}
        pageClassName={
          "p-2 rounded cursor-pointer border hover:border-blue-500 hover:text-blue-500"
        }
        activeClassName={"border border-blue-600 text-blue-500 rounded"}
      />
    </div>
  );
};

export default TableComponent;
