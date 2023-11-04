import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import SearchBar from "./SearchBar";
import userData from "../userData.json";
import TablebodyContent from "./TablebodyContent";
import Component2 from "./SmallComponents.jsx/Component2";
import {FiRefreshCcw} from "react-icons/fi";

const TableComponent = () => {
  const data = userData.users;

  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 6;

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  // const filteredData = data.slice(
  //   pageNumber * perPage,
  //   (pageNumber + 1) * perPage
  // );

  // Filters
  const [filterKycStatus, setFilterKycStatus] = useState("");
  const [filterZone, setFilterZone] = useState("");
  const [filterAccountType, setFilterAccountType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDataWithFilters = data
    .filter((item) => {
      return (
        (!filterKycStatus || item.kycStatus === filterKycStatus) &&
        (!filterZone || item.zone === filterZone) &&
        (!filterAccountType || item.accountType === filterAccountType) &&
        (!searchTerm ||
          item.customerName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    })
    .slice(pageNumber * perPage, (pageNumber + 1) * perPage);

    const resetFilters = () => {
      setFilterKycStatus("");
      setFilterZone("");
      setFilterAccountType("");
      setSearchTerm("");
    };

  return (
    <div className="p-4">
      <Component2 />
      <div className="text-black text-lg font-medium">Consumers Overview</div>

      {/* Search Bar */}
      <div className="flex mb-4">
        <SearchBar
          onSearch={(searchTerm) => {
            setSearchTerm(searchTerm);
          }}
        />
        <button onClick={resetFilters} className="p-2 ml-2 bg-blue-500 text-white rounded">
    <FiRefreshCcw className="h-5 w-5" />
  </button>
      </div>

      {/* Table */}
      <table className="table-fixed w-full">
        <thead>
          <tr
            className="text-blue-200 w-full"
            style={{ backgroundColor: "#DDEBFF" }}
          >
            <div className="w-96 h-20 relative text-blue-200">
              <div className="w-96 h-20 left-0 top-0 absolute text-blue-200" />
              <div className="left-[15px] top-[30px] absolute text-black text-sm font-medium ">
                Customer Name
              </div>
              <div className="w-36 left-[1190px] top-[33px] absolute text-black text-sm font-medium ">
                TPA
              </div>
              <div className="w-20 px-6 py-1 left-[564px] top-[26px] absolute justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-sm font-medium ">
                  <select
                    value={filterKycStatus}
                    onChange={(e) => setFilterKycStatus(e.target.value)}
                    className="bg-blue-100 text-base"
                  >
                    <option value="">KYC Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Done">Done</option>
                    <option value="Inprogress">Inprogress</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>
              <div className="w-48 h-7 left-[701px] top-[22px] absolute">
                <div className="w-20 h-7 left-0 top-0 absolute">
                  <div className="left-0 top-[8px] absolute text-black text-base font-medium">
                    Faciliatator
                  </div>
                </div>
              </div>
              <div className="w-80 h-12 left-[184px] top-[15px] absolute">
                <div className="left-[250px] top-[14px] absolute text-black text-base font-medium ">
                  Revenue
                </div>
                <div className="w-48 h-6 left-0 top-[15px] absolute">
                  <div className="text-black font-medium text-base ">
                    Assets
                    <select className="bg-blue-100 text-base "></select>
                  </div>
                </div>
                <div className="w-48 h-6 left-0 top-[34px] absolute flex gap-2 items-center">
                  <div className="text-blue-700 text-xs font-normal">
                    Total&nbsp;~₹9M
                  </div>
                  <div className="w-6 h-4 px-5 py-1 bg-gradient-to-b from-lime-50 via-amber-200 to-amber-400 rounded-full justify-center items-center inline-flex">
                    <div className="text-yellow-800 font-semibold text-center text-xs">
                      50.54g
                    </div>
                  </div>
                  <div className="w-6 h-4 px-4 bg-gradient-to-b from-gray-200 to-zinc-400 rounded-full justify-center items-center inline-flex">
                    <div className="text-zinc-600 text-xs font-semibold">
                      34.2g
                    </div>
                  </div>
                  <div className="w-6 h-4 px-5 bg-gradient-to-b from-sky-50 to-sky-200 rounded-full justify-center items-center inline-flex">
                    <div className="text-blue-400 text-xs font-semibold">
                      ₹242.5
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-[925px] top-[30px] absolute text-black text-sm font-medium">
                <select
                  value={filterZone}
                  onChange={(e) => setFilterZone(e.target.value)}
                  className="bg-blue-100 text-base"
                >
                  <option value="">Zone</option>
                  <option value="South">South</option>
                  <option value="North">North</option>
                  <option value="East">East</option>
                  <option value="West">West</option>
                </select>
              </div>
              <div className="left-[1020px] top-[30px] absolute text-black text-base font-medium">
                <select
                  value={filterAccountType}
                  onChange={(e) => setFilterAccountType(e.target.value)}
                  className="bg-blue-100 text-base "
                >
                  <option value="">Account Type</option>
                  <option value="Business">Business</option>
                  <option value="PayAndUseMinor">Pay and Use (Minor)</option>
                  <option value="PayAndUseMajor">Pay and Use (Major)</option>
                  <option value="SalaryEarner">Salary Earner</option>
                </select>
              </div>
            </div>
          </tr>
        </thead>

        <tbody>
          <TablebodyContent val={filteredDataWithFilters} />
        </tbody>
      </table>

      {/* Pagination */}
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
