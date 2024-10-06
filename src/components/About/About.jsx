import React from "react";
import "./About.module.css";
import useWindowSize from "../../Hooks/useWindowSize";
function About() {
  const size = useWindowSize();
  return (
    <>
      <div className="Top2">
        <div className="title-container">
          <h1>
            About Us <span className="underline"></span>
          </h1>
          <p>Les filières et diplômes FEDE</p>
        </div>
        <div
          className="cardsView"
          style={{ display: size.width > 800 ? "flex" : "block" }}
        ></div>
      </div>
    </>
  );
}

export default About;
