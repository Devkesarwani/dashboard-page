import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { RxCardStack } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { AiOutlineSetting } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="w-80 h-96 relative">
      <div className="flex items-center mb-0 pl-8 pt-7">
        <img
          className="w-7 h-7"
          src="https://media.licdn.com/dms/image/C560BAQEDdZOgaiYyzw/company-logo_200_200/0/1675061318659/zintlr_logo?e=2147483647&v=beta&t=K8Z5sV34JnD21jJbKyizPuM9Dz5ZmAUzW3IvjVCDuTc"
          alt="Zintlr logo"
        />
        <div className="text-indigo-500 text-xl font-medium font-inter">
          ZINTLR
        </div>
      </div>

      <div className="w-64 h-96 left-[267px] top-0 absolute origin-top-left rotate-180 bg-slate-50 backdrop-blur-xl" />

      <div className="w-64 h-12 left-[8px] top-[351px] absolute">
        <div className="w-64 h-12 left-0 top-0 absolute bg-blue-400 rounded-3xl" />

        <div className="w-8 h-8 left-[12px] top-[8px] absolute bg-white rounded-full" />
      </div>

      <div className="left-[62px] top-[137px] absolute opacity-50 text-black text-lg font-medium font-['Lato']">
        Dashboard
      </div>
      <div className="left-[62px] top-[195px] absolute opacity-50 text-black text-base font-medium font-['Lato']">
        Bullion Operations
      </div>
      <div className="left-[62px] top-[255px] absolute opacity-50 text-black text-base font-medium font-['Lato']">
        Transactions
      </div>
      <div className="left-[62px] top-[308px] absolute opacity-50 text-black text-base font-medium font-['Lato']">
        Your Network
      </div>
      <div className="left-[62px] top-[365px] absolute text-white text-base font-black font-['Lato']">
        Consumers
      </div>
      <div className="left-[62px] top-[427px] absolute opacity-50 text-black text-base font-medium font-['Lato']">
        Other Operations
      </div>
      <div className="left-[62px] top-[489px] absolute opacity-50 text-black text-base font-medium font-['Lato']">
        Manage Bank Accounts
      </div>
      <div className="left-[62px] top-[545px] absolute opacity-50 text-black text-base font-medium font-['Lato']">
        FAQ
      </div>
      <div className="left-[62px] top-[601px] absolute opacity-50 text-black text-base font-medium font-['Lato']">
        Customize Dashboard
      </div>
      <div className="w-px h-96 left-[268px] top-0 absolute origin-top-left rotate-180 opacity-50 bg-zinc-200 backdrop-blur-xl" />
      <div className="w-80 h-96 left-0 top-0 absolute">
        <div className="w-80 h-96 left-0 top-0 absolute" />
        <div className="w-16 h-16 left-[87px] top-[1054px] absolute" />
      </div>
      <div className="w-7 h-96 left-[23px] top-[134px] absolute">
        <div>
          <GrHomeRounded className="w-6 h-6 left-[2.70px] top-0 absolute" />
        </div>
        <div className="w-6 h-5 left-[2.70px] top-[60.55px] absolute">
          <div>
            <RxCardStack className="w-5 h-2 left-[0.60px] top-[12.45px] absolute" />
          </div>
        </div>
        <div>
          <GrTransaction className="w-6 h-5 left-[2.70px] top-[117.19px] absolute" />
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/7041/7041719.png"
            className="w-5 h-5 left-0 top-[228.73px] absolute"
            alt="consumer logo"
          />
        </div>
        <div className="w-6 h-6 left-[2.70px] top-[291.39px] absolute">
          <div className="w-6 h-5 left-0 top-[6.05px] absolute">
            <div className="w-5 h-2 left-[0.71px] top-[10.66px] absolute bg-gray-300 rounded-bl-sm rounded-br-sm" />
            <div className="w-6 h-5 left-0 top-0 absolute rounded-sm border-2 border-zinc-700" />
          </div>
        </div>
        <div>
          <BsBank className="w-6 h-6 left-[2.70px] top-[352.58px] absolute" />
        </div>
        <div className="w-6 h-6 left-[2.70px] top-[465.98px] absolute">
          <div>
            <AiOutlineSetting className="w-6 h-6 left-0 top-0 absolute" />
          </div>
        </div>
        <div className="w-6 h-4 left-[2.70px] top-[412.31px] absolute">
          <div>
            <FaQuestion className="w-4 h-5 left-[5.42px] top-[6.79px] absolute rounded-sm" />
          </div>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3042/3042718.png"
            alt="network logo"
            className="w-5 h-5 left-[2.50px] top-[174.32px] absolute"
          />
        </div>
      </div>
      <div className="w-56 h-40 left-[26px] top-[686px] absolute">
        <div className="w-56 h-32 left-0 top-[26px] absolute opacity-90 bg-gradient-to-b from-sky-400 to-blue-400 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl" />
        <div className="w-52 h-36 left-0 top-0 absolute">
          <div className="w-44 h-16 left-[35px] top-[66px] absolute">
            <div className="w-44 h-16 left-0 top-0 absolute bg-orange-500 rounded-lg border" />
          </div>
          <div className="w-48 h-28 left-[25px] top-[40px] absolute bg-white rounded-lg" />
          <div className="w-52 h-20 left-[2px] top-[31px] absolute">
            <div className="w-44 h-16 left-[23px] top-[9px] absolute">
              <div className="w-44 h-16 left-0 top-0 absolute bg-orange-500 rounded-lg border" />
            </div>
          </div>
          <div className="w-56 h-40 relative">
            <div className="w-56 h-32 left-0 top-[26px] absolute opacity-90 bg-gradient-to-b from-sky-400 to-blue-400 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl" />
            <div className="w-52 h-36 left-0 top-0 absolute">
              <div className="w-44 h-16 left-[35px] top-[66px] absolute">
                <div className="w-44 h-16 left-0 top-0 absolute bg-orange-500 rounded-lg border" />
              </div>
              <div className="w-48 h-28 left-[25px] top-[40px] absolute bg-white rounded-lg" />
              <div className="w-52 h-20 left-[2px] top-[31px] absolute">
                <div className="w-44 h-16 left-[23px] top-[9px] absolute">
                  <div className="w-44 h-16 left-0 top-0 absolute rounded-lg" />
                </div>
              </div>
              <div className="left-0 top-0 absolute opacity-70 text-black text-base font-medium font-['Lato']">
                Your Stock
              </div>
              <div className="w-40 h-8 left-[38px] top-[59px] absolute">
                <div className="left-0 top-0 absolute">
                  <span className="text-zinc-700 text-base font-normal font-['Lato'] leading-tight">
                    TruCoin{" "}
                  </span>
                  <span className="text-orange-500 text-base font-medium font-['Lato'] leading-tight">
                    Gold
                  </span>
                </div>
                <div className="left-[111px] top-[8px] absolute text-zinc-700 text-base font-semibold font-['Lato'] leading-tight">
                  7.3k gm
                </div>
                <div className="left-[2px] top-[19px] absolute text-lime-600 text-xs font-medium font-['Lato'] leading-none">
                  $6.18(+1.82%)
                </div>
              </div>
              <div className="w-40 h-8 left-[38px] top-[104px] absolute">
                <div className="left-0 top-0 absolute">
                  <span className="text-zinc-700 text-base font-normal font-['Lato'] leading-tight">
                    TruCoin{" "}
                  </span>
                  <span className="text-orange-500 text-base font-medium font-['Lato'] leading-tight">
                    Silver
                  </span>
                </div>
                <div className="left-[111px] top-[8px] absolute text-zinc-700 text-base font-semibold font-['Lato'] leading-tight">
                  8.3k gm
                </div>
                <div className="left-[2px] top-[19px] absolute text-lime-600 text-xs font-medium font-['Lato'] leading-none">
                  $6.18(+1.82%)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
