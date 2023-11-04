import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TablebodyContent = ({ val }) => {
  return (
    <>
      {val.map((item, index) => (
        <tr key={index}>
          <div className="w-96 h-20 relative">
            <div className="w-96 h-20 left-0 top-0 absolute bg-white" />
            <div className="left-[15px] top-[30px] absolute text-blue-600 text-lg font-medium ">
              {item.customerName}
            </div>
            <div className="w-36 left-[1185px] top-[30px] absolute text-zinc-700 text-sm font-normal ">
              {item.tpa}
            </div>
            <div
              className={`w-20 px-6 py-1 left-[564px] top-[26px] absolute rounded-full justify-center items-center gap-2.5 inline-flex 
  ${item.kycStatus === "Done" ? "bg-lime-50 text-green-500" : ""}
  ${item.kycStatus === "Pending" ? "bg-red-100 text-red-500" : ""}
  ${item.kycStatus === "InProgress" ? "bg-orange-100 text-orange-500" : ""}
  ${item.kycStatus === "Rejected" ? "bg-slate-100 text-slate-400" : ""}
`}
            >
              <div className="text-sm font-medium ">{item.kycStatus}</div>
            </div>

            <div className="w-48 h-7 left-[701px] top-[24px] absolute flex">
              <div className="w-1/2">
                <div className="text-zinc-400 text-xs font-normal ">
                  B2B&nbsp;Field&nbsp;Executive
                </div>
                <div className="text-Black text-sm font-normal ">
                  Arun&nbsp;Jha
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center space-x-2 pt-2">
                <FaArrowRightLong className="text-blue-500" />
              </div>
              <div className="w-1/2">
                <div className="text-zinc-400 text-xs font-normal ">
                  Associate
                </div>
                <div className="text-black text-sm font-normal ">
                  Anika&nbsp;Singh
                </div>
              </div>
            </div>

            <div className="w-80 h-12 left-[184px] top-[15px] absolute">
              <div className="left-0 top-0 absolute text-zinc-700 text-base font-medium ">
                {item.assets}
              </div>
              <div className="left-[250px] top-[17px] absolute text-zinc-700 text-lg font-medium ">
                {item.revenue}
              </div>
              <div className="w-16 h-6 px-6 py-1 left-0 top-[22px] absolute bg-gradient-to-b from-lime-50 via-amber-200 to-amber-400 rounded-full justify-center items-center gap-2.5 inline-flex">
                <div className="text-yellow-800 text-sm font-semibold ">
                  50.54g
                </div>
              </div>
              <div className="w-16 h-6 px-6 py-1 left-[71px] top-[22px] absolute bg-gradient-to-b from-gray-200 to-zinc-400 rounded-full justify-center items-center gap-2.5 inline-flex">
                <div className="text-zinc-600 text-sm font-semibold ">
                  34.2g
                </div>
              </div>
              <div className="w-16 h-6 px-6 py-1 left-[142px] top-[22px] absolute bg-gradient-to-b from-sky-50 to-sky-200 rounded-full justify-center items-center gap-2.5 inline-flex">
                <div className="text-blue-400 text-sm font-semibold ">
                  ₹242.5
                </div>
              </div>
            </div>
            <div className="left-[930px] top-[30px] absolute text-zinc-700 text-sm font-normal ">
              {item.zone}
            </div>
            <div className="left-[1029px] top-[30px] absolute text-zinc-700 text-sm font-normal ">
              {item.accountType === "Business" ? (
                "Business"
              ) : item.accountType === "PayAndUseMajor" ||
                item.accountType === "PayAndUseMinor" ? (
                <>
                  Pay&nbsp;and&nbsp;Use&nbsp;
                  <span className="text-blue-600 text-base">
                    ({item.accountType === "PayAndUseMajor" ? "Major" : "Minor"}
                    )
                  </span>
                </>
              ) : item.accountType === "Salary" ? (
                "Salary"
              ) : item.accountType === "Earner" ? (
                "Earner"
              ) : null}
            </div>
          </div>
        </tr>
      ))}
    </>
  );
};

export default TablebodyContent;
