import React from "react";
import img1 from "../../assets/s1.png";
import img2 from "../../assets/s2.png";
import img3 from "../../assets/s3.png";
import bg from "../../assets/bg.png";
import "../bg.css";

const Service = () => {
  return (
    <div>
      <div className="px-4 lg:px-32 py-5 mt-6">
        <h1 className="text-white font-semibold text-[19px] lg:text-[37px] mb-6 my-5">
          All <span className="gradient font-bold">Services</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div className="border border-slate-600 shadow-md  w-full lg:h-[270px] flex items-center justify-center bg-[#2C2B2B]  rounded-md background">
            <div className="p-3">
              <div className="h-11 w-11 mx-auto mb-3 rounded-full bg-white">
                <img
                  className="mx-auto text-center inline-block"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="text-white mx-auto text-center space-y-3">
                <h3 className="text-2xl font-semibold">UI/UX Design</h3>
                <p className="text-[15px] font-normal">
                  Knowing the state of your current cybersecurity posture as
                  well as executing on continued cybersecurity
                </p>
              </div>
            </div>
          </div>
          <div className="border border-slate-600 shadow-md  w-full lg:h-[270px] flex items-center justify-center bg-[#2C2B2B]  rounded-md background">
            <div className="p-3">
              <div className="h-11 w-11 mx-auto mb-3 rounded-full bg-white">
                <img
                  className="mx-auto text-center inline-block"
                  src={img2}
                  alt=""
                />
              </div>
              <div className="text-white mx-auto text-center space-y-3">
                <h3 className="text-2xl font-semibold">UI/UX Design</h3>
                <p className="text-[15px] font-normal">
                  Knowing the state of your current cybersecurity posture as
                  well as executing on continued cybersecurity
                </p>
              </div>
            </div>
          </div>
          <div className="border border-slate-600 shadow-md  w-full lg:h-[270px] flex items-center justify-center bg-[#2C2B2B]  rounded-md background">
            <div className="p-3">
              <div className="h-11 w-11 mx-auto mb-3 rounded-full bg-white">
                <img
                  className="mx-auto text-center inline-block"
                  src={img3}
                  alt=""
                />
              </div>
              <div className="text-white mx-auto text-center space-y-3">
                <h3 className="text-2xl font-semibold">UI/UX Design</h3>
                <p className="text-[15px] font-normal">
                  Knowing the state of your current cybersecurity posture as
                  well as executing on continued cybersecurity
                </p>
              </div>
            </div>
          </div>
          <div className="border border-slate-600 shadow-md  w-full lg:h-[270px] flex items-center justify-center bg-[#2C2B2B]  rounded-md background">
            <div className="p-3">
              <div className="h-11 w-11 mx-auto mb-3 rounded-full bg-white">
                <img
                  className="mx-auto text-center inline-block"
                  src={img2}
                  alt=""
                />
              </div>
              <div className="text-white mx-auto text-center space-y-3">
                <h3 className="text-2xl font-semibold">UI/UX Design</h3>
                <p className="text-[15px] font-normal">
                  Knowing the state of your current cybersecurity posture as
                  well as executing on continued cybersecurity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
