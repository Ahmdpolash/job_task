import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import "../src/Components/bg.css";
import Provide from "./Components/Provide/Provide";
import About from "./Components/About/About";
import Client from "./Components/Client/Client";
import Service from "./Components/Service/Service";
import Works from "./Components/Works/Works";
import Brand from "./Components/Brand/Brand";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";
function App() {
  return (
    <>
      <div className="">
        <div className="bg-black bg">
          <Navbar />
          <Banner />
        </div>
        <div className="bg-[#070707] ">
          <Provide />
          <About />
          <Client />
          <Service />
          <Works />
          <Testimonials />
          <Brand />
          <Team />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
