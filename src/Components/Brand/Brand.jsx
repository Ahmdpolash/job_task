import React from "react";
import "../bg.css";
const Brand = () => {
  return (
    <div>
      <div className="px-4 lg:px-32 py-5 mt-6">
        <h1 className="text-white  text-[19px] font-semibold  lg:text-[37px] mb-6 my-5">
          Our <span className="gradient font-semibold">Collaborations</span>
        </h1>

        <div className="flex justify-between items-center">
          <img
            className="w-[160px] "
            src="https://i.ibb.co/28KsxR2/Layer-1.png"
            alt="brand"
          />
          <img
            className="w-[160px]"
            src="https://i.ibb.co/PjX21DJ/Group-150.png"
            alt="brand"
          />
          <img
            className="w-[160px] h-[60px]"
            src="https://i.ibb.co/17bYcTD/Layer-1-1.png"
            alt="brand"
          />
          <img
            className="w-[160px] h-[60px]"
            src="https://i.ibb.co/XXwfvD0/Layer-1-2.png"
            alt="brand"
          />
        </div>

     
      </div>
    </div>
  );
};

export default Brand;
