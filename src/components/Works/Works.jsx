import React from "react";
import "./Works.css";
import youtube from "../../assets/youtubeClone.png";
import chatGpt from "../../assets/chatgpt.png";
import Gemini from "../../assets/Gemini.png";
import port4 from "../../assets/portfolio-4.png";
import port5 from "../../assets/portfolio-5.png";
import port6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workTitle">My Works</h2>
      <span className="workDes">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. "I am excited to bring my skills and
        experience to help businesses achieve their goals and create online
        presense".{" "}
      </span>
      <div className="worksImges">
        <img src={youtube} alt="" className="worksImg" />
        <img src={chatGpt} alt="" className="worksImg" />
        <img src={Gemini} alt="" className="worksImg" />
        <img src={port4} alt="" className="worksImg" />
        <img src={port5} alt="" className="worksImg" />
        <img src={port6} alt="" className="worksImg" />
      </div>
      <button className="worksBtn">See more</button>
    </section>
  );
};

export default Works;
