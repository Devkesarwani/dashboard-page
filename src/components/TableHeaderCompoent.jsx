// import React from "react";

// const TableHeader = ({
//   selectedKycStatus,
//   setSelectedKycStatus,
//   selectedZone,
//   setSelectedZone,
//   selectedAccountType,
//   setSelectedAccountType,
//   onSort
// }) => {
//   const handleKycStatusChange = (e) => {
//     const value = e.target.value;
//     setSelectedKycStatus((prevSelected) =>
//       prevSelected.includes(value)
//         ? prevSelected.filter((item) => item !== value)
//         : [...prevSelected, value]
//     );
//   };

//   const handleZoneChange = (e) => {
//     const value = e.target.value;
//     setSelectedZone((prevSelected) =>
//       prevSelected.includes(value)
//         ? prevSelected.filter((item) => item !== value)
//         : [...prevSelected, value]
//     );
//   };

//   const handleAccountTypeChange = (e) => {
//     const value = e.target.value;
//     setSelectedAccountType((prevSelected) =>
//       prevSelected.includes(value)
//         ? prevSelected.filter((item) => item !== value)
//         : [...prevSelected, value]
//     );
//   };
//   return (
//     <tr className="text-blue-200 w-full" style={{ backgroundColor: "#DDEBFF" }}>
//       <div className="w-96 h-20 relative text-blue-200">
//         <div className="w-96 h-20 left-0 top-0 absolute text-blue-200" />
//         <div className="left-[15px] top-[30px] absolute text-black text-sm font-medium ">
//           Customer Name
//         </div>
//         <div className="w-36 left-[1190px] top-[33px] absolute text-black text-sm font-medium ">
//           TPA
//         </div>
//         <div className="w-20 px-6 py-1 left-[564px] top-[26px] absolute justify-center items-center gap-2.5 inline-flex">
//           <div className="text-black text-sm font-medium ">
//             <select
//             multiple
//               value={selectedKycStatus}
//               onChange={handleKycStatusChange}
//               className="bg-blue-100 text-base"
//             >
//               <option value="Pending">Pending</option>
//               <option value="Done">Done</option>
//               <option value="Inprogress">Inprogress</option>
//               <option value="Rejected">Rejected</option>
//             </select>
//           </div>
//         </div>
//         <div className="w-48 h-7 left-[701px] top-[22px] absolute">
//           <div className="w-20 h-7 left-0 top-0 absolute">
//             <div className="left-0 top-[8px] absolute text-black text-base font-medium">
//               Faciliatator
//             </div>
//           </div>
//         </div>
//         <div className="w-80 h-12 left-[184px] top-[15px] absolute">
//           <div className="left-[250px] top-[14px] absolute text-black text-base font-medium ">
//             Revenue
//           </div>
//           <div className="w-48 h-6 left-0 top-[15px] absolute">
//             <div className="text-black font-medium text-base ">
//               Assets
//               <select className="bg-blue-100 text-base "></select>
//             </div>
//           </div>
//           <div className="w-48 h-6 left-0 top-[34px] absolute flex gap-2 items-center">
//             <div className="text-blue-700 text-xs font-normal">
//               Total&nbsp;~₹9M
//             </div>
//             <div className="w-6 h-4 px-5 py-1 bg-gradient-to-b from-lime-50 via-amber-200 to-amber-400 rounded-full justify-center items-center inline-flex">
//               <div className="text-yellow-800 font-semibold text-center text-xs">
//                 50.54g
//               </div>
//             </div>
//             <div className="w-6 h-4 px-4 bg-gradient-to-b from-gray-200 to-zinc-400 rounded-full justify-center items-center inline-flex">
//               <div className="text-zinc-600 text-xs font-semibold">34.2g</div>
//             </div>
//             <div className="w-6 h-4 px-5 bg-gradient-to-b from-sky-50 to-sky-200 rounded-full justify-center items-center inline-flex">
//               <div className="text-blue-400 text-xs font-semibold">₹242.5</div>
//             </div>
//           </div>
//         </div>
//         <div className="left-[925px] top-[30px] absolute text-black text-sm font-medium">
//         <select
//           multiple
//           value={selectedZone}
//           onChange={handleZoneChange}
//           className="bg-blue-100 text-base"
//         >

//             <option value="">Zone</option>
//             <option value="South">South</option>
//             <option value="North">North</option>
//             <option value="East">East</option>
//             <option value="West">West</option>
//           </select>
//         </div>
//         <div className="left-[1020px] top-[30px] absolute text-black text-base font-medium">
//         <select
//           multiple
//           value={selectedAccountType}
//           onChange={handleAccountTypeChange}
//           className="bg-blue-100 text-base"
//         >
//             <option value="Business">Business</option>
//             <option value="PayAndUseMinor">Pay and Use (Minor)</option>
//             <option value="PayAndUseMajor">Pay and Use (Major)</option>
//             <option value="SalaryEarner">Salary Earner</option>
//           </select>
//         </div>
//       </div>
//     </tr>
//   );
// };

// export default TableHeader;

import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const TableHeader = ({
  selectedKycStatus,
  setSelectedKycStatus,
  selectedZone,
  setSelectedZone,
  selectedAccountType,
  setSelectedAccountType,
  onSort,
}) => {
  const [showKycStatusDropdown, setShowKycStatusDropdown] = useState(false);
  const [showZoneDropdown, setShowZoneDropdown] = useState(false);
  const [showAccountTypeDropdown, setShowAccountTypeDropdown] = useState(false);

  const handleKycStatusChange = (e) => {
    const value = e.target.value;
    setSelectedKycStatus((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleZoneChange = (e) => {
    const value = e.target.value;
    setSelectedZone((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleAccountTypeChange = (e) => {
    const value = e.target.value;
    setSelectedAccountType((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  return (
    <tr className="text-blue-200 w-full" style={{ backgroundColor: "#DDEBFF" }}>
      <div className="w-96 h-20 relative text-blue-200">
        <div className="w-96 h-20 left-0 top-0 absolute text-blue-200" />
        <div className="left-[15px] top-[30px] absolute text-black text-sm font-medium">
          Customer Name
        </div>
        <div className="w-36 left-[1190px] top-[33px] absolute text-black text-sm font-medium">
          TPA
        </div>
        <div className="w-20 px-6 py-1 left-[564px] top-[26px] justify-center items-center gap-2.5 inline-flex origin-top-right absolute text-black text-sm font-medium ring-1 ring-black ring-opacity-5">
          <div className="text-black text-sm font-medium">
            <div className="dropdown-container">
              <button
                className="dropdown-button bg-blue-100 text-black inline-flex items-center "
                onClick={() => setShowKycStatusDropdown(!showKycStatusDropdown)}
              >
                KYC&nbsp;Status
                <AiOutlineCaretDown className="dropdown-icon" />
              </button>
              {showKycStatusDropdown && (
                <div
                  className="dropdown-content shadow-lg bg-white"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {["Pending", "Done", "InProgress", "Rejected"].map(
                    (status) => (
                      <label
                        key={status}
                        className="checkbox-label items-center flex px-4 py-2"
                        role="menuitem"
                        tabIndex="0"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          value={status}
                          checked={selectedKycStatus.includes(status)}
                          onChange={handleKycStatusChange}
                        />
                        <span className="ml-2 text-gray-700">{status}</span>
                      </label>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-48 h-7 left-[701px] top-[22px] absolute">
          <div className="w-20 h-7 left-0 top-0 absolute">
            <div className="left-0 top-[8px] absolute text-black text-base font-medium">
              Facilitator
            </div>
          </div>
        </div>
        <div className="w-80 h-12 left-[184px] top-[15px] absolute">
          <div className="left-[250px] top-[14px] absolute text-black text-base font-medium">
            Revenue
          </div>
          <div className="w-48 h-6 left-0 top-[15px] absolute">
            <div className="text-black font-medium text-base">
              Assets
              <select className="bg-blue-100 text-base"></select>
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
              <div className="text-zinc-600 text-xs font-semibold">34.2g</div>
            </div>
            <div className="w-6 h-4 px-5 bg-gradient-to-b from-sky-50 to-sky-200 rounded-full justify-center items-center gap-2.5 inline-flex">
              <div className="text-blue-400 text-xs font-semibold">₹242.5</div>
            </div>
          </div>
        </div>
        <div className="left-[925px] top-[30px] origin-top-right absolute inline-block text-black text-sm font-medium bg-white ring-1 ring-black ring-opacity-5 ">
          <div className="dropdown-container">
            <button
              className="dropdown-button bg-blue-100 text-black inline-flex items-center "
              onClick={() => setShowZoneDropdown(!showZoneDropdown)}
            >
              Zone
              <AiOutlineCaretDown className="dropdown-icon" />
            </button>
            {showZoneDropdown && (
              <div
                className="dropdown-content shadow-lg bg-white"
                role="menu"
                aria-orientation="vertical"
              >
                {["South", "North", "East", "West"].map((zone) => (
                  <label
                    key={zone}
                    className="checkbox-label items-center flex px-4 py-2"
                    role="menuitem"
                    tabIndex="0"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      value={zone}
                      checked={selectedZone.includes(zone)}
                      onChange={handleZoneChange}
                    />
                    <span className="ml-2 text-gray-700">{zone}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="left-[1020px] top-[30px] origin-top-right absolute inline-block text-black text-sm font-medium bg-white ring-1 ring-black ring-opacity-5 ">
          <div className="dropdown-container">
            <button
              className="dropdown-button bg-blue-100 text-black inline-flex items-center "
              onClick={() =>
                setShowAccountTypeDropdown(!showAccountTypeDropdown)
              }
            >
              Account&nbsp;Type
              <AiOutlineCaretDown className="dropdown-icon" />
            </button>
            {showAccountTypeDropdown && (
              <div
                className="dropdown-content shadow-lg bg-white"
                role="menu"
                aria-orientation="vertical"
              >
                {[
                  "Business",
                  "PayAndUseMinor",
                  "PayAndUseMajor",
                  "Salary",
                  "Earner",
                ].map((accountType) => (
                  <label
                    key={accountType}
                    className="checkbox-label items-center flex px-4 py-2"
                    role="menuitem"
                    tabIndex="0"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      value={accountType}
                      checked={selectedAccountType.includes(accountType)}
                      onChange={handleAccountTypeChange}
                    />
                    <span className="ml-2 text-gray-700">{accountType}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </tr>
  );
};

export default TableHeader;
