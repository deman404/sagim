import React from "react";
import "./About2.css"; // Link to the CSS file
import about from "../../../assets/images/about-1-1.png";
import useWindowSize from "../../../Hooks/useWindowSize";
import { FaSquareFacebook } from "react-icons/fa6";
const About2 = () => {
  const size = useWindowSize();
  return (
    <div
      className="about-container"
      style={{ display: size.width > 1200 ? "none" : "block" }}
    >
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          L’Ecole SAGIM est un établissement privé de formation professionnelle
          installée à Marrakech. L’école offre 3 types de formation : formation
          diplômante, formation supérieure délocalisée, formation continue
          (certifications et langues). Elle organise des formations dans les
          domaines de la gestion et comptabilité, management et de
          l’informatique.
        </p>
        <button style={{background:"#fff"}}>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
            <FaSquareFacebook size={20} />
            </div>
          </div>
          <span>Savoir plus</span>
        </button>
      </div>
    </div>
  );
};

export default About2;
