import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import "../src/Components/bg.css";
import Provide from "./Components/Provide/Provide";
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
        </div>
      </div>
    </>
  );
}

export default App;
