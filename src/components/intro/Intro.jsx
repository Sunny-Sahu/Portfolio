import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <section id="intro">
      <div className="IntroContent">
        <span className="hello">Hello </span>
        <span className="introText">
          I'm <span className="introName">Sunny</span> <br /> Website Designer
        </span>
        <p className="introPara">
          I'm a skilled web designer with experience in createing <br />{" "}
          visually appealing and user friendly websites
        </p>
      </div>
    </section>
  );
};
export default Intro;
