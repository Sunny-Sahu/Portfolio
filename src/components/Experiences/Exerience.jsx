import React from "react";
import "./Experience.css";
import js from "../../assets/logo-javascript.svg";

import react from "../../assets/react.svg";

const Exerience = () => {
  return (
    <section id="experience">
      <h1 className="title">Experience</h1>
      <div className="parda">
        <div className="extechss">
          {" "}
          <div className="extech">
            <img
              className="Eximg"
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              alt="JavaScript"
            />
          </div>
          <div className="extech">
            <img
              className="Eximg"
              src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png"
              alt="html"
            />
          </div>
          <div className="extech">
            <img
              className="Eximg"
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
              alt="css"
            />
          </div>
          <div className="extech">
            <img
              className="Eximg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
              alt="tailwind"
            />
          </div>
          <div className="extech">
            <img className="Eximg" src={react} alt="" />
          </div>
          <div className="extech">
            <img
              className="Eximg"
              src="https://cdn.iconscout.com/icon/free/png-256/free-git-17-1175218.png"
              alt=""
            />
          </div>
        </div>
        <div className="ExperienceDes">
          <div className="excard">
            <h1 className="cardtitle">Frontend Web Developer</h1>
            <div className="Cardescription">
              <ul>
                <li>Proficient in HTML, CSS and JavaScript</li>
                <li>Proficent in ReactJS</li>
                <li>Adapt at colaborating with cross-function teams.</li>
              </ul>
            </div>
          </div>
          <div className="excard">
            <h1 className="cardtitle">Software Developer Trainee, NareshIT </h1>
            <div className="Cardescription">
              <ul>
                <li>
                  Excited to levarage newly skills in HTML, CSS, JavaScript and
                  frameworks like React for creating dynamic userinterface
                </li>
                <li>Familiarity with .Net and Database like SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Here starts card description */}
    </section>
  );
};

export default Exerience;
