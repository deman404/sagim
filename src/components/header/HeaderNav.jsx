import React from "react";
import "./HeaderNav.css";
import useWindowSize from "../../Hooks/useWindowSize";
import LogoDark from "../../assets/images/lightLogo.png";
import { IoLogIn } from "react-icons/io5";
import { useState } from "react";
import { PiListFill } from "react-icons/pi";
import DropDown from "../tools/DropDown";

export default function HeaderNav() {
  const size = useWindowSize();
  const [isVisible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!isVisible);
  };
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <header
      className="header"
      style={{ width: size.width > 1300 ? "50%" : "80%" }}
    >
      <div className="logo">
        <a onClick={refreshPage}>
          <img
            src={LogoDark}
            alt="logo"
            style={{ width: size.width > 800 ? "150px" : "150px" }}
          />
        </a>
      </div>
      <nav
        className="nav-links"
        style={{ display: size.width > 800 ? "flex" : "none" }}
      >
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Diplomes</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button style={{ display: size.width > 800 ? "flex" : "none",background:'#fff' }}>
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <IoLogIn size={20}  />
          </div>
        </div>
        <span >Login</span>
      </button>
      {/*drop down menu */}
      <div
        className="BtnNav"
        style={{ display: size.width < 800 ? "flex" : "none" }}
      >
        {/* Icon that toggles dropdown */}
        <a href="#" onClick={toggleDropdown}>
          <PiListFill size={30} color="#ffffff" />
        </a>

        {/* Conditionally show the dropdown based on visibility */}
        {isVisible && (
          <DropDown/>
        )}
      </div>
    </header>
  );
}
