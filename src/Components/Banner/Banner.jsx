import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="h-[88vh]  flex items-center justify-center w-full">
      <div className="mx-auto text-center space-y-3">
        <h1 className="text-3xl lg:text-5xl 2xl:text-[70px] font-semibold text-white">
          Innovative Cyber Agency
        </h1>
        <h2 className="text-[#A8FF57] 2xl:text-7xl font-semibold text-5xl">
          Artificial Intelligence
        </h2>
        <p className="text-white text-[16px] 2xl:text-[21px] 2xl:pt-2 max-w-[65%] mx-auto text-center mt-2">
          We're the best digital marketing agency from West Bengal, curating
          experiences that users fall in love with.
        </p>

        <div className="mx-auto pt-3 inline-block text-center">
          <button className="hidden 2xl:py-[10px] 2xl:font-semibold 2xl:text-[19px] 2xl:px-8  lg:flex items-center gap-2 font-semibold px-5 py-[7px] rounded-md  lg:ml-4 text-black   bg-gradient-to-l from-[#8FFA6D] to-[#8FFA6D]">
            Hire Us
            <span>
              <GoArrowUpRight className="font-bold 2xl:text-[22px]  text-[19px]" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
