import React from "react";
import "./Home.css";
import profilePic from "../images/prapul-image-ai.png";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h1>Hi, I'm Namilakonda Sai Prapul</h1>
        <h2>MERN Stack Developer</h2>
        <p>
          I'm a MERN Stack Developer who enjoys building dynamic and responsive
          web applications. I focus on creating clean user interfaces, efficient
          backend logic, and delivering seamless digital experiences that solve
          real-world problems.
        </p>
        <a href="#projects" className="home__cta">View My Work</a>
      </div>

      <div className="home__image">
        <img src={profilePic} alt="Sai Prapul" />
      </div>
    </section>
  );
};

export default Home;
