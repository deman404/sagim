import React from "react";
import "./About.css";
import useWindowSize from "../../Hooks/useWindowSize";
import Card2 from "../tools/card2";
import about from '../../assets/images/about-1-1.png';
function About() {
  const size = useWindowSize();
  return (
    <>
      <div className="Top3">
        <div className="title-container">
          <h1>
            About Us <span className="underline"></span>
          </h1>
          <p>Les filières et diplômes FEDE</p>
        </div>
        <div
          className="cardsView2"
          style={{ display: size.width > 800 ? "flex" : "block" }}
        >
          <div className="leftSide">
            <div className="ImageBorders">
                <img src={about} alt="about" style={{width:300}}/>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default About;
