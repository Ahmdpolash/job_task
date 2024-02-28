import React from "react";
import "../bg.css";
import { RiGlobalLine } from "react-icons/ri";

import { CgArrowBottomRight } from "react-icons/cg";
import { FaBehance, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="px-4 lg:px-32 py-5 mt-16">
        <div>
          <h2 className="text-2xl font-semibold gradient">Contact</h2>

          
        </div>

      </div>
      <h1 className="text-5xl border-b pb-7 border-slate-400 mt-3 text-white font-semibold flex items-center gap-1 px-4 lg:px-32">
            Let's Talk{" "}
            <span className="text-2xl pt-5">
              <CgArrowBottomRight />
            </span>{" "}
          </h1>

          <div className="flex px-4 lg:px-32 justify-between items-center">
            <div className="flex  gap-4 my-4 items-center">
              <h3 className="text-[18px] text-slate-200">
                Copyright Ethical Den
              </h3>
              <h3 className="text-[18px] text-slate-200">
                hello@ethicalden.com
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <a href="">
                {" "}
                <FaInstagram className="text-white text-[25px]" />
              </a>
              <a href="">
                {" "}
                <FaFacebook className="text-white text-[25px]" />
              </a>
              <a href="">
                {" "}
                <FaBehance className="text-white text-[25px]" />
              </a>
              <a href="">
                {" "}
                <RiGlobalLine className="text-white text-[25px]" />
              </a>
            </div>
          </div>
    </div>
  );
};

export default Footer;
