import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Projects from "./Pages/Projects.js";
import Skill from "./Pages/Skill.js";
import Contact from "./Pages/Contact.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
