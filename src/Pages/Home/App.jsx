import { useState } from "react";
import "./App.css";
import Header from "../../components/header/HeaderNav";
import Slider from "../../components/Slider/Slider";
import TopPage from "../../components/TopPage/TopPage";
import ple from "../../assets/images/ple.png";
import ple1 from "../../assets/images/ple2.png";
import Deplome from "../../components/deplome/deplome";
import About from "../../components/About/About";
import About2 from "../../components/About/aboutLess/About2";
function App() {
  return (
    <div className="app">
      <img src={ple} alt="bg" className="ple" />
      <img src={ple1} alt="bg" className="ple1" />
      <img src={ple1} alt="bg" className="ple2" />
      <Header />
      <div className='mainDiv'>
        <TopPage />
        <About2/>
        <About/>
        <Deplome />
      </div>
    </div>
  );
}

export default App;
