import React, { useState } from "react";
import "./Navbar.css";
import logoS from "../../assets/Slogo.png";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";
import menubb from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowmenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logoS} alt="" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Experience
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .querySelector("#ContactPages")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contact} className="desktopImgBtn" alt="" />
        Contact Me
      </button>

      {/* Here starts mobile menu */}

      <img
        src={menubb}
        alt=""
        className="mobMenu"
        onClick={() => setShowmenu(!showMenu)}
      />

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => setShowmenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowmenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowmenu(!showMenu)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowmenu(!showMenu)}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="ContactPage"
          spy={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowmenu(!showMenu)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
