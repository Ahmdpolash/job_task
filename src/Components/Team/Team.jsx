import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Team = () => {
  return (
    <div className="px-4 lg:px-32 py-5 mt-6">
      <h1 className="text-white  text-[19px] font-semibold  lg:text-[37px] mb-6 my-5">
        Our <span className="gradient font-semibold">Collaborations</span>
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="h-[270px]">
          <img
            src="https://i.ibb.co/0Btgjf8/Rectangle-16.png"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[270px]">
          <img
            src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[270px]">
          <img
            src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1708992000&semt=ais"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[270px]">
          <img
            src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[270px]">
          <img
            src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
