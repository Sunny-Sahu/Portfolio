import React from "react";
import "./intro.css";
import linkedin from "../../assets/linkedin.webp"
import git from "../../assets/git.png"
import naukri from "../../assets/naukri.png"

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
      <div className="container">
        <div className="smedia">
          <a href="https://www.linkedin.com/in/sunnysahu15050">
          <img src={linkedin} alt="git" /></a>
        </div>
        <div className="smedia">
          <a href="https://github.com/Sunny-Sahu">
          <img src={git} alt="git" /></a>
        </div>
        <div className="smedia">
          <a href="https://www.naukri.com/mnjuser/profile?id=&altresid">
          <img src={naukri} alt="git" /></a>
        </div>

      </div>
      </div>
    </section>
  );
};
export default Intro;
