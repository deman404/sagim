import React from "react";
import "./TopPage.css";
import TopImage from "../../assets/images/top.png";
import useWindowSize from "../../Hooks/useWindowSize";

function TopPage() {
  const size = useWindowSize();
  return (
    <>
      <div
        className="Top"
        style={{ display: size.width > 800 ? "flex" : "block" }}
      >
        <div className="TopLeft">
          <h1 style={{ fontSize: size.width > 800 ? "125px" : "70px" }}>
            S.A.G.I.M
          </h1>
          <p style={{ fontSize: size.width > 800 ? "25px" : "18px",width:size.width > 800 ? "" : "300px" }}>
            L’Ecole SAGIM est un établissement privé de formation
            professionnelle installée à Marrakech. L’école offre 3 types de
            formation : formation diplômante, formation supérieure délocalisée,
            formation continue (certifications et langues).
          </p>
        </div>
        <div className="TopRight">
          <img
            src={TopImage}
            alt="logo"
            className="TopImag"
            style={{ width: size.width > 900 ? "400px" : "350px" }}
          />
        </div>
      </div>
    </>
  );
}

export default TopPage;
