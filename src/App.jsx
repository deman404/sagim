import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/HeaderNav';
import Slider from './components/Slider/Slider';
import TopPage from './components/TopPage/TopPage';
import ple from "./assets/images/ple.png";
import ple1 from "./assets/images/ple2.png";



function App() {

  return (
    <div className="app">
      <img src={ple} alt="bg" className='ple'/>
      <img src={ple1} alt="bg" className='ple1'/>
      <img src={ple1} alt="bg" className='ple2'/>

      <Header />
      <TopPage/>
    </div>
  )
}

export default App
