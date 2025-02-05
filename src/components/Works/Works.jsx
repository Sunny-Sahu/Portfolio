import React from "react";
import "./Works.css";
import youtube from "../../assets/youtubeClone.png";
import chatGpt from "../../assets/chatgpt.png";
import Gemini from "../../assets/Gemini.png";
import portfolio from "../../assets/portfolio.png";
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
        <a href="https://youtube-clone-sunny.netlify.app">
          <img src={youtube} alt="" className="worksImg" />
        </a>
        <img src={chatGpt} alt="" className="worksImg" />
        <a href="https://gemini-clone-sunny.netlify.app">
          <img src={Gemini} alt="" className="worksImg" />
        </a>
        <a href="https://portfolio-demo-sunny.netlify.app">
          {" "}
          <img src={portfolio} alt="" className="worksImg" />
        </a>

        <img src={port5} alt="" className="worksImg" />
        <img src={port6} alt="" className="worksImg" />
      </div>

      <button className="worksBtn">See more</button>
    </section>
  );
};

export default Works;
