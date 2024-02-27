import React from "react";
import Container from "../../Shared/Container";
import { FaAnglesRight } from "react-icons/fa6";

import img1 from "../../assets/provide1.png";
import img2 from "../../assets/provide2.png";
import img3 from "../../assets/provide3.png";

import "../bg.css";

const Provide = () => {
  const images = [img1, img2, img3];

  return (
    <div className="">
      <Container>
        <h1 className="text-white  text-[18px] lg:text-3xl 2xl:tet-3xl mb-6 my-5">
          What We <span>Provide</span>
        </h1>

        {/* Provide Box  start here*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((card, index) => (
            <div
              key={index}
              className="border bgColors hover:duration-700 rounded-md px-14 py-4 "
            >
              <img
                className="w-ful h-[190px] mx-auto"
                src={images[index]}
                alt=""
              />

              <div className="mx-auto text-white text-center py-3">
                <h3 className="text-2xl font-semibold mb-3 space-y-4">Branding</h3>
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
      </Container>
    </div>
  );
};

export default Provide;