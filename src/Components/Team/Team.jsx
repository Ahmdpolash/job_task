import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../bg.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaBehance } from "react-icons/fa";

// import required modules
import { Pagination } from "swiper/modules";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

const Team = () => {
  return (
    <div className="px-4 lg:px-32 py-5 mt-8">
      <h1 className="text-white  text-[19px] font-semibold  lg:text-[40px] mb-6 my-5">
        Our <span className="gradient font-semibold">Team</span>
      </h1>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="h-[295px] group relative">
            <img
              src="https://i.ibb.co/0Btgjf8/Rectangle-16.png"
              alt=""
              className="w-full h-full"
            />
            <div className="absolute  transition-opacity duration-500 bgGradient bg-[#524f4f]  bg-opacity-80 opacity-0 group-hover:opacity-100 flex bottom-3 right-2 left-2 px-4 rounded-md h-[125px] justify-center items-center">
              <div className="mx-auto text-center text-white">
                <h3 className="text-2xl  font-semibold">Nazmul Islam</h3>
                <p className="text-white text-[15px] text-lg">UI/UX Designer</p>
                <div className="flex pt-2 justify-center gap-2 items-center">
                  <FaBehance />
                  <FaInstagram />
                  <AiOutlineGlobal />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[295px] group relative">
            <img
              src="https://i.ibb.co/PM2SXQW/Rectangle-17.png"
              alt=""
              className="w-full h-full"
            />
            <div className="absolute  transition-opacity duration-500 bgGradient bg-[#524f4f]  bg-opacity-80 opacity-0 group-hover:opacity-100 flex bottom-3 right-2 left-2 px-4 rounded-md h-[125px] justify-center items-center">
              <div className="mx-auto text-center text-white">
                <h3 className="text-2xl  font-semibold">Polash Ahmed</h3>
                <p className="text-white text-[15px] text-lg">
                  Jr. Frontend Developer
                </p>
                <div className="flex pt-2 justify-center gap-2 items-center">
                  <FaBehance />
                  <FaInstagram />
                  <AiOutlineGlobal />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[295px] group relative">
            <img
              src="https://i.ibb.co/DznRYKb/Rectangle-16-1.png"
              alt=""
              className="w-full h-full"
            />
            <div className="absolute transition-opacity duration-500 bgGradient bg-[#524f4f]  bg-opacity-80 opacity-0 group-hover:opacity-100 flex bottom-3 right-2 left-2 px-4 rounded-md h-[125px] justify-center items-center">
              <div className="mx-auto text-center text-white">
                <h3 className="text-2xl  font-semibold">Polash Ahmed</h3>
                <p className="text-white text-[15px] text-lg">
                  Jr. Frontend Developer
                </p>
                <div className="flex pt-2 justify-center gap-2 items-center">
                  <FaBehance />
                  <FaInstagram />
                  <AiOutlineGlobal />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[295px] group relative">
            <img
              src="https://i.ibb.co/Y3pTPjg/Rectangle-16-2.png"
              alt=""
              className="w-full h-full"
            />
            <div className="absolute transition-opacity duration-500 bgGradient bg-[#524f4f]  bg-opacity-80 opacity-0 group-hover:opacity-100 flex bottom-3 right-2 left-2 px-4 rounded-md h-[125px] justify-center items-center">
              <div className="mx-auto text-center text-white">
                <h3 className="text-2xl  font-semibold">Polash Ahmed</h3>
                <p className="text-white text-[15px] text-lg">
                  Jr. Frontend Developer
                </p>
                <div className="flex pt-2 justify-center gap-2 items-center">
                  <FaBehance />
                  <FaInstagram />
                  <AiOutlineGlobal />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="h-[295px] group relative">
            <img
              src="https://i.ibb.co/f93pLgp/elegant-businessman-office-155003-9641.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className="absolute  bgGradient transition-opacity duration-500  bg-[#524f4f]  bg-opacity-80 opacity-0 group-hover:opacity-100 flex bottom-3 right-2 left-2 px-4 rounded-md h-[125px] justify-center items-center">
              <div className="mx-auto text-center text-white">
                <h3 className="text-2xl  font-semibold">Nazmul Islam</h3>
                <p className="text-white text-[15px] text-lg">UI/UX Designer</p>
                <div className="flex pt-2 justify-center gap-2 items-center">
                  <FaBehance />
                  <FaInstagram />
                  <AiOutlineGlobal />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="h-[295px] group relative">
            <img
              src="https://i.ibb.co/6bPbD1Y/images-q-tbn-ANd9-Gc-Qe-Ibze-Etp-IKNt8-ZMA11-Ku-Jn-ZN7-ONge-EDK35-A-usqp-CAU.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className="absolute  transition-opacity duration-500 bgGradient bg-[#524f4f] bg-opacity-80 opacity-0 group-hover:opacity-100 flex bottom-3 right-2 left-2 px-4 rounded-md h-[125px] justify-center items-center">
              <div className="mx-auto text-center text-white">
                <h3 className="text-2xl  font-semibold">Nazmul Islam</h3>
                <p className="text-white text-[15px] text-lg">UI/UX Designer</p>
                <div className="flex pt-2 justify-center gap-2 items-center">
                  <FaBehance />
                  <FaInstagram />
                  <AiOutlineGlobal />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
