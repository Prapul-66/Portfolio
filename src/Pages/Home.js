import React from "react";
import "./Home.css";

const profilePic = "https://via.placeholder.com/300"; // online profile image

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h1>Hi, I'm Namilakonda Sai Prapul</h1>
        <h2>MERN Stack Developer</h2>
        <p>
          I'm passionate about building scalable web applications and solving
          real-world problems using the MERN stack. I enjoy creating clean UIs
          and writing efficient backend logic.
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
