import "./TopPage.css";
import TopImage from "../../assets/images/top.png";
import useWindowSize from "../../Hooks/useWindowSize";
import React, { useState, useEffect } from "react";

function TopPage() {
  //size of windows
  const size = useWindowSize();

  //text changer
  const texts = [
    " la gestion et comptabilité",
    " management",
    " l’informatique",
  ];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false); // Flag to control erasing vs typing
  const [isTyping, setIsTyping] = useState(true); // Flag to control typing state

  useEffect(() => {
    let intervalId;

    if (isTyping && !isErasing) {
      // Typing the text one letter at a time
      intervalId = setInterval(() => {
        setCurrentText((prevText) => prevText + texts[textIndex][charIndex]);

        if (charIndex < texts[textIndex].length - 1) {
          setCharIndex((prevIndex) => prevIndex + 1);
        } else {
          // After typing the text, start erasing after 2 seconds
          setIsTyping(false);
          setTimeout(() => {
            setIsErasing(true);
          }, 2000); // 2-second pause after the text is fully typed
          clearInterval(intervalId);
        }
      }, 200); // Typing speed
    }

    if (isErasing) {
      // Erasing the text one letter at a time
      intervalId = setInterval(() => {
        setCurrentText((prevText) => prevText.slice(0, -1)); // Remove last letter

        if (currentText.length === 0) {
          // After erasing, switch to typing the next text
          setIsErasing(false);
          setIsTyping(true);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text
          setCharIndex(0);
          clearInterval(intervalId);
        }
      }, 100); // Erasing speed (faster than typing)
    }

    return () => clearInterval(intervalId);
  }, [charIndex, isTyping, isErasing, textIndex, currentText, texts]);
  return (
    <>
      <div
        className="Top"
        style={{
          display: size.width > 600 ? "flex" : "block",
          width: size.width > 800 ? "60%" : "80%",
        }}
      >
        <div className="TopLeft">
          <h1 style={{ fontSize: size.width > 1300 ? "125px" : "70px" }}>
            S.A.G.I.M
          </h1>
          <div className="TextChanger">
            <h3
              style={{
                fontSize: size.width > 1300 ? "35px" : "25px",
                width: size.width > 1300 ? "" : "400px",
              }}
            >
              {currentText}
            </h3>
          </div>
          <p
            style={{
              fontSize: size.width > 800 ? "25px" : "18px",
              width: size.width > 1300 ? "600px" : "300px",
            }}
          >
            Depuis 1996, notre établissement a diplômé plus de 100k
            étudiants, les préparant avec succès à leur carrière
            professionnelle. Nous sommes fiers de notre engagement à fournir une
            formation de qualité adaptée aux exigences du marché.
          </p>
        </div>
        <div className="TopRight">
          <img
            src={TopImage}
            alt="logo"
            className="TopImag"
            style={{ width: size.width > 900 ? "400px" : "300px" }}
          />
        </div>
      </div>
    </>
  );
}

export default TopPage;
