import React from "react";
import { MdPersonAddAlt1 } from "react-icons/md";

const Component1 = () => {
  return (
    <>
      <div
        className="h-40 left-0 top-0 absolute opacity-5 bg-gradient-to-b from-sky-400 to-blue-400 rounded-xl shadow border"
        style={{ width: "538px" }}
      />
      <img
        className="w-44 h-33 left-[322px] top-[11px] absolute"
        src="https://media.licdn.com/dms/image/C4E12AQFmD9g4CYM0PQ/article-inline_image-shrink_400_744/0/1611922550425?e=1704326400&v=beta&t=BkP23iCy-WuEDtTlHb4wFR1PLfk8W9z0xoo-o9_1dGk"
        alt=""
      />
      <div className="w-56 left-[26px] top-[22px] absolute">
        <div className="w-44 h-16 left-0 top-[31px] absolute">
          <div className="w-44 h-10 left-0 top-[30px] absolute justify-start items-start gap-1 inline-flex">
            <div className="w-44 h-10 px-2.5 py-1 bg-zinc-700 rounded border border-zinc-700 justify-center items-center gap-2 flex">
              <div className="w-6 h-6 relative" />
              <MdPersonAddAlt1
                className=" border-white text-white"
                style={{ fontSize: "110px" }}
              />
              <div className="text-white text-base font-semibold ">
                Add&nbsp;Consumers
              </div>
            </div>
          </div>
          <div className="left-0 top-0 absolute text-black text-lg font-medium ">
            Actions
          </div>
        </div>
        <div className="left-0 top-0 absolute text-sky-400 text-base font-medium ">
          Consumer&nbsp;{">"}&nbsp;Manage&nbsp;Consumers
        </div>
      </div>
    </>
  );
};

export default Component1;
