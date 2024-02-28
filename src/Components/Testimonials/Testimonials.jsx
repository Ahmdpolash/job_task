import React from "react";
import "../bg.css";
import { FaStar } from "react-icons/fa6";
import "../bg.css";
import { FaQuoteRight } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="px-4 lg:px-32 py-5 mt-6">
      <h1 className="text-white  text-[19px] font-semibold  lg:text-[37px] mb-6 my-5">
        What Our <span className="gradient font-semibold">Client Say</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border relative provideCard h-[220px] border-slate-500 bg-[#2C2B2B]  w-full p-6">
          <div className="flex  items-center gap-5">
            <img
              className="h-12 w-12 rounded-md"
              src="https://i.ibb.co/37M4Wk8/Rectangle-19.png"
              alt="user"
            />
            <div className=" text-white">
              <h1 className="text-xl font-semibold">John Doe</h1>
              <p className="text-[15px] font-normal ">Project Manager</p>
            </div>
            <div className="absolute right-4 top-12">
              <FaQuoteRight className="text-white text-xl" />
            </div>
          </div>

          <div className="flex items-center gap-2 py-5">
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
          </div>
          <p className="text-white">
            Neque massa lectus erat viverra nisl mauris massa diam. Vitae leo
            orci id odio porta malesuada magna.
          </p>
        </div>
        <div className="border provideCard h-[220px] border-slate-500 bg-[#2C2B2B]  w-full p-6">
          <div className="flex items-center gap-5">
            <img
              className="h-12 w-12 rounded-md"
              src="https://i.ibb.co/37M4Wk8/Rectangle-19.png"
              alt="user"
            />
            <div className=" text-white">
              <h1 className="text-xl font-semibold">John Doe</h1>
              <p className="text-[15px] font-normal ">Project Manager</p>
            </div>
          </div>

          <div className="flex items-center gap-2 py-5">
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
          </div>
          <p className="text-white">
            Neque massa lectus erat viverra nisl mauris massa diam. Vitae leo
            orci id odio porta malesuada magna.
          </p>
        </div>
        <div className="border provideCard h-[220px] border-slate-500 bg-[#2C2B2B]  w-full p-6">
          <div className="flex items-center gap-5">
            <img
              className="h-12 w-12 rounded-md"
              src="https://i.ibb.co/37M4Wk8/Rectangle-19.png"
              alt="user"
            />
            <div className=" text-white">
              <h1 className="text-xl font-semibold">John Doe</h1>
              <p className="text-[15px] font-normal ">Project Manager</p>
            </div>
          </div>

          <div className="flex items-center gap-2 py-5">
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
            <FaStar className="text-[#FFA000] text-[17px]" />
          </div>
          <p className="text-white">
            Neque massa lectus erat viverra nisl mauris massa diam. Vitae leo
            orci id odio porta malesuada magna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
