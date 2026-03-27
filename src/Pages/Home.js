import React from "react";
import "./Home.css";
import profilePic from "../images/prapul-image-ai.png";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h1>Hi, I'm Namilakonda Sai Prapul</h1>
        <h2>Software Developer</h2>
  <p>
  I'm an aspiring Software Developer with a strong foundation in programming
  and software engineering principles. I have experience building full-stack
  applications and enjoy solving real-world problems through clean,
  scalable, and efficient code. With knowledge of Data Structures,
  Algorithms, and core computer science concepts, I focus on developing
  reliable and high-performance software solutions.
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
