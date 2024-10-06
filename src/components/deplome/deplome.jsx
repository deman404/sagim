import React from "react";
import "./deplome.css";
import Card from "../tools/Cards";
import useWindowSize from "../../Hooks/useWindowSize";
function Deplome() {
  const size = useWindowSize();
  return (
    <>
      <div className="Top2">
        <div className="title-container">
          <h1>
            DIPLÔMES <span className="underline"></span>
          </h1>
          <p>Les filières et diplômes FEDE</p>
        </div>
        <div
          className="cardsView"
          style={{ display: size.width > 800 ? "flex" : "block" }}
        >
          <div style={{ display: size.width > 800 ? "flex" : "flex" }}>
            <Card
              title="Management, Gestion Organisations et des Ressources Humaines "
              link="link"
              image="https://isg.dz/wp-content/uploads/2019/08/874587874587.png"
            />
            <Card
              title=" Commerce, Marketing, Communication, Médias  "
              link="link"
              image="https://f.hellowork.com/seo/domaine/commerce.jpeg"
            />
          </div>
          <div style={{ display: size.width > 800 ? "flex" : "flex" }}>
            <Card
              title=" Informatique, Digital, Technologie  "
              link="link"
              image="https://talks.freelancerepublik.com/wp-content/uploads/2021/03/Comment-developper-efficacement-son-activite.jpg"
            />

            <Card
              title="Financier Comptable 
Développement Informatique  "
              link="link"
              image="https://www.reduire-votre-impot.com/wp-content/uploads/2023/03/main_adobestock327295497.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Deplome;
