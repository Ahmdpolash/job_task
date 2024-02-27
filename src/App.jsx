import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import "../src/Components/bg.css";
import Provide from "./Components/Provide/Provide";
import About from "./Components/About/About";
import Client from "./Components/Client/Client";
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
        </div>
      </div>
    </>
  );
}

export default App;
