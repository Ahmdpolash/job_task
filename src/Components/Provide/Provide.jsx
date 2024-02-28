import React from "react";
import Container from "../../Shared/Container";
import { FaAnglesRight } from "react-icons/fa6";

import img1 from "../../assets/provide1.png";
import img2 from "../../assets/provide2.png";
import img3 from "../../assets/provide3.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import "../bg.css";

const Provide = () => {
  const images = [img1, img2, img3];

  return (
    <div className="overflow-hidden">
      <div className="px-32 py-5">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="500"
         
        >
          <h1 className="text-white font-semibold text-[19px] lg:text-[37px]  mb-6 my-5">
            What We <span className="gradient font-semibold">Provide</span>
          </h1>
        </div>

        {/* Provide Box  start here*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((card, index) => (
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              key={index}
              className=" cardBorder provideCard  px-14 py-6 gradient-borer hover:duration-700"
            >
              <img
                className="w-ful h-[190px] mx-auto"
                src={images[index]}
                alt=""
              />

              <div className="mx-auto text-white text-center py-3">
                <h3 className="text-2xl font-semibold mb-3 space-y-4">
                  Branding
                </h3>
                <p className="text-[15px] font-normal">
                  Knowing the state of your current cybersecurity posture as
                  well as executing on continued
                </p>
                <p className="flex items-center gap-2 mx-auto text-center justify-center font-bold text-white pt-2">
                  Read More <FaAnglesRight />{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provide;
