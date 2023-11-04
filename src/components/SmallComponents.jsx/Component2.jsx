import React, { useEffect, useState } from 'react';
import Component1 from "./Component1";
import userData from '../../userData.json';
import TopNav from './TopNav';


const Component2 = () => {
  const data = userData.users;
  const [pendingCount, setPendingCount] = useState(0);
  useEffect(() => {
    // Function to calculate pending KYC status
    function calculatePendingKYCStatus(customers) {
      let pendingCount = 0;
      for (const customer of customers) {
        if (customer.kycStatus === "Pending") {
          pendingCount++;
        }
      }
      return pendingCount;
    }
    const count = calculatePendingKYCStatus(data);
    setPendingCount(count);
  }, [data]);

  return (
    <>
    <div>
    <TopNav />
    </div>
      <div className="w-96 h-40 relative">
      
        <Component1 />
        <div className="w-96 h-40 left-[541px] top-0 absolute">
          <div className="w-64 h-40 left-0 top-0 absolute">
            <div className="w-64 h-40 left-0 top-0 absolute opacity-20 bg-gradient-to-b from-orange-300 to-amber-700 rounded-xl shadow border" />
            <div className="w-44 h-24 left-[34px] top-[24px] absolute">
              <div className="w-44 left-0 top-0 absolute">
                <span className="text-zinc-700 text-lg font-normal "> </span>
                <span className="text-zinc-700 text-3xl font-semibold ">
                  {pendingCount}
                </span>
                <span className="text-zinc-700 text-lg font-normal ">
                  {" "}
                  KYC approval pending
                </span>
              </div>
              <div className="w-24 h-9 px-2.5 py-1 left-0 top-[65px] absolute bg-zinc-700 rounded justify-center items-center inline-flex">
                <div className="justify-center items-center gap-0.5 flex">
                  <div className="text-white text-base font-semibold font-['Poppins']">
                    View List
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 h-40 left-[259px] top-0 absolute w">
            <div className="w-60 h-40 left-0 top-0 absolute opacity-10 bg-gradient-to-b from-red-300 to-red-700 rounded-xl shadow border" />
            
            <div className="w-5 h-5 left-[34px] top-[28px] absolute" />
            <div className="w-40 left-[34px] top-[20px] absolute">
              <span className="text-zinc-700 text-lg font-normal "> </span>
        
              <span className="text-zinc-700 text-3xl font-semibold ">182</span>
              <span className="text-zinc-700 text-lg font-normal ">
                {" "}
                high risk consumers
              </span>
            </div>
            <div className="w-24 h-9 px-2.5 py-1 left-[34px] top-[89px] absolute bg-zinc-700 rounded justify-center items-center inline-flex">
              <div className="justify-center items-center gap-0.5 flex">
                <div className="text-white text-base font-semibold font-['Poppins']">
                  View List
                </div>
              </div>
            </div>
          </div>
          <div className="w-52 h-40 left-[502px] top-0 absolute">
            <div className="w-52 h-40 left-0 top-0 absolute opacity-10 bg-gradient-to-b from-blue-300 to-blue-800 rounded-xl shadow border" />
            <div className="w-40 left-[34px] top-[20px] absolute">
              <span className="text-zinc-700 text-lg font-normal "> </span>
              <span className="text-zinc-700 text-3xl font-semibold ">32</span>
              <span className="text-zinc-700 text-lg font-normal ">
                {" "}
                tickets open
              </span>
            </div>
            <div className="w-24 h-9 px-2.5 py-1 left-[34px] top-[89px] absolute bg-zinc-700 rounded justify-center items-center inline-flex">
              <div className="justify-center items-center gap-0.5 flex">
                <div className="text-white text-base font-semibold font-['Poppins']">
                  View List
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-[575px] top-[29px] absolute">
          <div className="w-5 h-5 left-0 top-[3px] absolute flex-col justify-start items-start inline-flex" />
          <div className="w-6 h-6 left-[508px] top-0 absolute flex-col justify-start items-start inline-flex" />
        </div>
      </div>
    </>
  );
};

export default Component2;
