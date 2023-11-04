import React from "react";
import SearchBar from "./../SearchBar";
import { TbMoneybag } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import { PiFolderUserFill } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";

const TopNav = () => {
  return (
    <>
      <div className="w-96 h-20 relative">
        <SearchBar />
        <div className="w-40 left-[755px] top-[26px] absolute">
          <div className="w-28 h-7 left-[43px] top-0 absolute">
            <div className="w-8 h-8 relative flex-col justify-start items-start inline-flex">
              <div className="w-6 h-6 relative">
                <TbMoneybag />
              </div>
            </div>
            <div className="w-7 h-7 right-[44px] top-[1px] absolute">
              <div className="w-7 h-7 left-0 top-0 absolute">
                <GiWallet />
              </div>
            </div>
          </div>
          <div className="w-8 h-8 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
            <div className="w-6 h-6 relative">
              <PiFolderUserFill />
            </div>
          </div>
          <div className="w-6 h-7 relative">
            <div className="w-6 h-7 left-[120px] top-0 absolute font-semibold">
              <div className="w-6 h-5 left-0 top-0 absolute">
                <IoIosNotificationsOutline />
              </div>
            </div>
          </div>
        </div>
        <div className="w-72 h-20 left-[925px] top-[2px] absolute">
          <div
            className="w-72 h-20 left-0 top-0 absolute opacity-40 bg-white rounded-xl shadow border border-indigo-200"
            style={{ height: "70px" }}
          />
          <div className="left-[14px] top-[19px] absolute text-orange-500 text-base font-medium ">
            Gold
          </div>
          <div className="left-[168px] top-[21px] absolute text-zinc-700 text-xs font-medium ">
            Buy:
          </div>
          <div className="w-24 h-5 left-[197px] top-[20px] absolute">
            <div className="left-0 top-0 absolute text-zinc-700 text-sm font-medium ">
              ₹7,390.00
            </div>
            <div className="w-4 h-4 left-[75px] top-[3px] absolute flex-col justify-start items-start inline-flex" />
          </div>
          <div className="left-[168px] top-[43px] absolute text-zinc-700 text-xs font-medium ">
            Sell:
          </div>
          <div className="w-24 h-5 left-[197px] top-[42px] absolute">
            <div className="left-0 top-0 absolute text-zinc-700 text-sm font-medium ">
              ₹7,090.00
            </div>
            <div className="w-4 h-4 left-[75px] top-[3px] absolute flex-col justify-start items-start inline-flex" />
          </div>
          <div className="w-16 h-10 left-[87px] top-[20px] absolute">
            <div className="w-16 h-5 left-0 top-0 absolute">
              <div className="w-16 h-px left-0 top-[10.45px] absolute border border-zinc-700"></div>
              <div className="w-16 h-5 left-0 top-0 absolute"></div>
            </div>
            <div className="left-[23px] top-[24px] absolute text-green-400 text-xs font-normal ">
              +0.34%
            </div>
          </div>
          <div className="left-[41px] top-[47px] absolute text-zinc-700 text-sm font-normal font-['Poppins']">
            IN
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
