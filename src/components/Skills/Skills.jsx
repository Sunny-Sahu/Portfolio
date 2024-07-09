import React from "react";
import "./Skills.css";
import Ui from "../../assets/ui-design.png";
import web from "../../assets/website-design.png";
import app from "../../assets/app-design.png";
import js from "../../assets/logo-javascript.svg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDis">
        I am skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and keep eye for detail.I am proficient in HTML,
        CSS, JavaScript as well as ReactJS.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Ui} alt="UiDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Creating dynamic user interface</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={web} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>Enthusiast for creating websites.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={app} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App design</h2>
            <p>Learning designing in App Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
