import React from "react";
import "./About.css";
import useWindowSize from "../../Hooks/useWindowSize";
import about from "../../assets/images/about-1-1.png";
import { IoBook } from "react-icons/io5";
function About() {
  const size = useWindowSize();
  return (
    <>
      <div className="Top3" style={{display:size.width > 1200 ? "block":"none"}}>
        <div className="title-container">
          <h1>
            About Us <span className="underline"></span>
          </h1>
        </div>
        <div className="cardsView2">
          <div className="leftSide">
            <div className="ImageBorders" >
              <img src={about} alt="about" style={{ width:300}} />
            </div>
            <div className="rightSide" >
              <div>
                <span className="spanData span1">
                  <div className="imageB">
                    <IoBook size={20} color="#fff" />
                  </div>
                  <h1 style={{fontSize: size.width > 1200 ? 18 : 15}}>Management et Gestion des PME</h1>
                </span>
                <span className="spanData span2">
                  <div className="imageB">
                    <IoBook size={20} color="#fff" />
                  </div>
                  <h1 style={{fontSize: size.width > 1200 ? 18 : 15}}>Management Financières</h1>
                </span>
                <span className="spanData span3">
                  <div className="imageB">
                    <IoBook size={20} color="#fff" />
                  </div>
                  <h1 style={{fontSize: size.width > 1200 ? 18 : 15}}>Managementd’Entreprise</h1>
                </span>
              </div>
              <div>
                <span className="spanData2 span4">
                  <h1 style={{fontSize: size.width > 1200 ? 18 : 15}}>Marketing Digital </h1>
                  <div className="imageB">
                    <IoBook size={20} color="#fff" />
                  </div>
                </span>
                <span className="spanData2 span5">
                  <h1 style={{fontSize: size.width > 1200 ? 18 : 15}}>Informatiques, Réseaux et Sécurité</h1>
                  <div className="imageB">
                    <IoBook size={20} color="#fff" />
                  </div>
                </span>
                <span className="spanData2 span6">
                  <h1 style={{fontSize: size.width > 1200 ? 18 : 15}}>Développeur Mobiles</h1>
                  <div className="imageB">
                    <IoBook size={20} color="#fff" />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
