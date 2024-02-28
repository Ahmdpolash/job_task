import React, { useState } from "react";

import Coverflow from "react-coverflow";

import "../bg.css";

const Works = () => {
  const work = [
    "All",
    " UI/UX design",
    "Logo Design",
    "Web Development",
    "Branding",
  ];

  const [tab, setTab] = useState("All");

  return (
    <div id="work">
      <div className="px-4 lg:px-32 py-5 mt-6">
        <h1 className="text-white font-semibold text-[19px] lg:text-3xl 2xl:tet-3xl mb-6 my-5">
          Our <span className="gradient font-bold">Work</span>
        </h1>

        <div className="flex justify-between items-center flex-wrap">
          <div className="mb-3">
            <ul className="flex flex-wrap gap-5 mb-3 items-center">
              <li
                className={`${
                  tab === "All"
                    ? "gradient border-b font-bold border-teal-400"
                    : "text-white font-semibold"
                } text-[16px] cursor-pointer  text-white`}
                onClick={() => setTab("All")}
              >
                All
              </li>
              <li
                className={`${
                  tab === "empty"
                    ? "gradient border-b font-bold border-teal-400"
                    : "text-white font-semibold"
                } text-[16px] cursor-pointer  text-white`}
                onClick={() => setTab("empty")}
              >
                UI/UX design
              </li>
              <li
                className={`${
                  tab === "logo"
                    ? "gradient border-b font-bold border-teal-400"
                    : "text-white "
                } text-[16px] cursor-pointer font-bold text-white`}
                onClick={() => setTab("logo")}
              >
                Logo Design
              </li>
              <li
                className={`${
                  tab === "web"
                    ? "gradient border-b font-bold border-teal-400"
                    : "text-white font-semibold"
                } text-[16px] cursor-pointer  text-white`}
                onClick={() => setTab("web")}
              >
                Web Development
              </li>
              <li
                className={`${
                  tab === "branding"
                    ? "gradient border-b font-bold border-teal-400"
                    : "text-white font-semibold"
                } text-[16px] cursor-pointer  text-white`}
                onClick={() => setTab("branding")}
              >
                Branding
              </li>
            </ul>
          </div>
          <div className="pb-3">
            <button className="border btn gradient font-semibold ">
              See All Works
            </button>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className=""
        >
          {tab === "All" && (
            <Coverflow
              width="960"
              height="350"
              classes={{ background: "rgb(233, 23, 23)" }}
              className=""
              displayQuantityOfSide={2}
              navigation={false}
              enableScroll={true}
              infiniteScroll={true}
              clickable={true}
              active={0}
            >
              <div
                onClick={() => fn()}
                onKeyDown={() => fn()}
                role="menuitem"
                tabIndex="0"
              >
                <img
                  className="rounded-md"
                  src="https://i.ibb.co/HCWP5xy/Rectangle-7.png"
                />
              </div>
              <img
                className="rounded-md"
                src="https://i.ibb.co/pQyFmvv/Rectangle-8.png"
              />
              <img
                className="rounded-md"
                src="https://i.ibb.co/DWYKCC8/Rectangle-11.png"
              />
              <img
                className="rounded-md"
                src="https://i.ibb.co/j8jJwkC/Rectangle-10.png"
              />
              <img
                className="rounded-md"
                src="https://i.ibb.co/Wv3C1v0/Rectangle-9.png"
              />
            </Coverflow>
          )}

          {tab === "empty" && (
            <div className="h-[350px] flex items-center border-slate-700 justify-center w-full border text-white">
              <p className="text-2xl font-semibold">Not Available ..!</p>
            </div>
          )}
          {tab === "logo" && (
            <div className="h-[350px] flex items-center border-slate-700 justify-center w-full border text-white">
              <p className="text-2xl font-semibold">Not Available ..!</p>
            </div>
          )}
          {tab === "web" && (
            <div className="h-[350px] flex items-center border-slate-700 justify-center w-full border text-white">
              <p className="text-2xl font-semibold">Not Available ..!</p>
            </div>
          )}
          {tab === "branding" && (
            <div className="h-[350px] flex items-center border-slate-700 justify-center w-full border text-white">
              <p className="text-2xl font-semibold">Not Available ..!</p>
            </div>
          )}
        </div>

        <div className="mx-auto mt-7 space-y-3 text-center text-white">
          <h3 className="text-3xl font-semibold">branding</h3>
          <p className="max-w-[580px] mx-auto text-[19px] font-normal text-slate-200">
            Our team of experienced photographers can help you capture the
            perfect shots for your business or personal project. Whether you
            need product photography, event coverage, or portrait sessions, we
            have the skills and equipment to deliver stunning images that tell
            your story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
