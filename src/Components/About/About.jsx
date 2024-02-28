import React from "react";
import Container from "../../Shared/Container";
import "../bg.css";
const About = () => {
  return (
    <div id="about" className="mt-10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img
              className="lg:h-[400px] w-full lg:w-[690px]"
              src="https://i.ibb.co/6vjFDh9/Rectangle-101-1.png"
              alt=""
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-white space-y-4"
          >
            <h3 className="text-4xl font-semibold">
              <span className="gradient">About</span> Us
            </h3>
            <p className="pt-4">
              Welcome to Ethical Den - The Strategic Digital Company. We are a
              brand and digital consultancy based in India, partnering globally
              with leaders across industries to build future products, services,
              and brands. Working for the unknown since 2021. Our services span
              a wide variety of audiences and capabilities, but all of them are
              rooted in inspiring ideas, human connection, and writing your
              brand's future. The world is changing fast. We help you keep up
            </p>

            <div className="pt-3">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-[16px] items-center">
                      <img
                        className="h-5 w-5"
                        src="https://i.ibb.co/9YWfFLV/carbon-security.png"
                        alt=""
                      />
                      <p className="text-slate-200">Cyber Security Services</p>
                    </li>
                    <li className="flex gap-2 text-[16px] items-center">
                      <img
                        className="h-5 w-5"
                        src="https://i.ibb.co/8P6QLBp/carbon-development.png"
                        alt=""
                      />
                      <p className="text-slate-200">Web Development</p>
                    </li>
                    <li className="flex gap-2 text-[16px] items-center">
                      <img
                        className="h-5 w-5"
                        src="https://i.ibb.co/3Ftq1fB/nimbus-marketing.png"
                        alt=""
                      />
                      <p className="text-slate-200">Digital Marketing</p>
                    </li>
                    <li className="flex gap-2 text-[16px] items-center">
                      <img
                        className="h-5 w-5"
                        src="https://i.ibb.co/37K9N98/material-symbols-light-branding-watermark-outline.png"
                        alt=""
                      />
                      <p className="text-slate-200">
                        Search Engine Optimization
                      </p>
                    </li>
                    <li className="flex gap-2 text-[16px] items-center">
                      <img
                        className="h-5 w-5"
                        src="https://i.ibb.co/SnGHz3p/iconoir-search-engine.png"
                        alt=""
                      />
                      <p className="text-slate-200">Branding</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-[16px] items-center">
                      <img
                        className="h-5 w-5"
                        src="https://i.ibb.co/2WVvqvC/streamline-artificial-intelligence-spark.png"
                        alt=""
                      />
                      <p className="text-slate-200">Artifical Intelligence</p>
                    </li>
                    <li className="flex gap-2 text-[16px] items-center">
                      <img
                        className="h-5 w-5"
                        src="https://i.ibb.co/ThV8PHG/carbon-application-mobile.png"
                        alt=""
                      />
                      <p className="text-slate-200">Mobile app Development</p>
                    </li>
                    <li className="flex gap-2 text-[16px] items-center">
                      <img
                        className="h-5 w-5"
                        src="https://i.ibb.co/Ycp1w3T/icon-park-outline-editing.png"
                        alt=""
                      />
                      <p className="text-slate-200">Video Editing</p>
                    </li>
                    <li className="flex gap-2 text-[16px] items-center">
                      <img
                        className="h-5 w-5"
                        src="https://i.ibb.co/B3Sf1Xj/carbon-software-resource-cluster.png"
                        alt=""
                      />
                      <p className="text-slate-200">Software Solutions</p>
                    </li>
                    <li className="flex gap-2 text-[16px] items-center">
                      <img
                        className="h-5 w-5"
                        src="https://i.ibb.co/SnGHz3p/iconoir-search-engine.png"
                        alt=""
                      />
                      <p className="text-slate-200">Engagement Campaigns</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
