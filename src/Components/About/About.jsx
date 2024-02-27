import React from "react";
import Container from "../../Shared/Container";

const About = () => {
  return (
    <div className="mt-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 ">
          <img src="https://i.ibb.co/6vjFDh9/Rectangle-101-1.png" alt="" />

          <div className="text-white">
            <h3>About Us</h3>
            <p>
              Welcome to Ethical Den - The Strategic Digital Company. We are a
              brand and digital consultancy based in India, partnering globally
              with leaders across industries to build future products, services,
              and brands. Working for the unknown since 2021. Our services span
              a wide variety of audiences and capabilities, but all of them are
              rooted in inspiring ideas, human connection, and writing your
              brand's future. The world is changing fast. We help you keep up
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
