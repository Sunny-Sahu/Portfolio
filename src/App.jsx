import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Exerience from "./components/Experiences/Exerience";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Exerience />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
