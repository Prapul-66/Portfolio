import React from "react";
import "./Home.css";

const profilePic = "https://via.placeholder.com/300"; // online profile image

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h1>Hi, I'm Namilakonda Sai Prapul</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I'm a Full Stack Developer who enjoys building dynamic and responsive
          web applications. I focus on creating clean user interfaces, efficient
          backend logic, and delivering seamless digital experiences that solve
          real-world problems.
        </p>
        <a href="#projects" className="home__cta">View My Work</a>
      </div>

      <div className="home__image">
        <img src={profilePic} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
