import React from "react";
import '../bg.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "../bg.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaBehance } from "react-icons/fa";

// import required modules
import { Pagination } from "swiper/modules";

const Client = () => {
  return (
    <div>
      <div className="px-4 lg:px-32 py-5 mt-6">
        <h1 className="text-white  text-[19px] font-semibold  lg:text-[37px] mb-6 my-5">
          Our Valuable <span className="gradient font-semibold">Clients</span>
        </h1>

        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
          <div className="border border-slate-600 shadow-md rounded-sm w-full lg:h-[270px] flex items-center justify-center bg-[#202020] p-5">
            <img
              className="mx-auto w-[185px] "
              src="https://i.ibb.co/NSHSbpq/Group.png"
              alt=""
            />
          </div>
          <div className=" rounded-sm w-full  lg:h-[270px] flex items-center justify-center  p-5">
            <img
              className="mx-auto w-[185px] "
              src="https://i.ibb.co/NCbG1L7/Group-1.png"
              alt=""
            />
          </div>
          <div className="border border-slate-600 lg:h-[270px] rounded-sm w-full h-[270px] flex items-center justify-center bg-[#202020] p-5">
            <img
              className="mx-auto w-[185px] "
              src="https://i.ibb.co/cFGsFWF/Layer-1.png"
              alt=""
            />
          </div>

          <div className=" rounded-sm w-full h-full lg:h-[270px] flex items-center justify-center  p-5">
            <img
              className="mx-auto w-[185px] "
              src="https://i.ibb.co/hWGt45w/Layer-1-1.png"
              alt=""
            />
          </div>
          <div className="border border-slate-600 rounded-sm w-full lg:h-[270px] flex items-center justify-center bg-[#202020] p-5">
            <img
              className="mx-auto w-[185px] "
              src="https://i.ibb.co/P6G4FNd/Group-2.png"
              alt=""
            />
          </div>
          <div className=" rounded-sm w-full h-full lg:h-[270px] flex items-center justify-center  p-5">
            <img
              className="mx-auto w-[185px] "
              src="https://i.ibb.co/Y2cRyKS/Layer-1-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
