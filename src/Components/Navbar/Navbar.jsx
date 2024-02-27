// import logo from "../public/Logo/Logo.png";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";

import logo from "../../../public/Logo/Logo.png";
import Container from "../../Shared/Container";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navList = (
    <>
      <a to="/" className="lg:ml-4">
        Home
      </a>
      <a to="/about" className="lg:ml-4">
        About Us
      </a>
      <a to="/contact" className="lg:ml-4">
        Services
      </a>
      <a to="/services" className="lg:ml-4">
        Our Work
      </a>
      <a to="/services" className="lg:ml-4">
        Education
      </a>
    </>
  );

  return (
    <Container>
      <div className="flex text-white cursor-pointer justify-between items-center">
        
        <div className="logo 2xl:h-[40px] 2xl:w-[195] h-[35px] w-[170px]">
          <img className="h-full w-full" src={logo} alt="logo" />
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:block">
          <ul className="lg:flex text-[18px] 2xl:text-[19px] lg:gap-4">{navList}</ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } lg:hidden fixed transition-all duration-500 border border-gray-200 shadow-lg backdrop-blur-sm transform h-full w-[350px] bg-white text-black top-0 left-0`}
        >
          <button
            className="px-4 py-2 text-3xl font-semibold flex absolute right-0 mt-2"
            onClick={() => setOpen(false)}
          >
            <RxCross1 />
          </button>

          <ul className="flex  flex-col p-5 gap-5 text-[18px]">{navList}</ul>
        </div>

        <div className="flex items-center">
          <button className="hidden  lg:flex items-center gap-2 border px-6 py-[6px] rounded-md  lg:ml-4 text-[#09E5E5]">
            Hire Us
            <span>
              <GoArrowUpRight />
            </span>
          </button>

          <IoMdMenu
            className="text-2xl cursor-pointer lg:hidden ml-4"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
