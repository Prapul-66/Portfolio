import React from "react";
import "./Projects.css";

// Import all tech icons
import htmlIcon from "../images/HTML.png";
import cssIcon from "../images/CSS.png";
import jsIcon from "../images/js.png";
import reactIcon from "../images/reactjs.png";
import nodeIcon from "../images/Nodejs.png";
import expressIcon from "../images/expressjs.png";
import mongoIcon from "../images/mongodb.png";

// Map tech names to their icons
const techIcons = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  React: reactIcon,
  "Node.js": nodeIcon,
  "Express.js": expressIcon,
  MongoDB: mongoIcon,
};

const Projects = () => {
  const projects = [
    {
      title: "Fullstack Mastery",
      icon: "🧠",
      description:
        "A frontend-only learning platform built with React and plain JavaScript. Includes multiple pages using React Router and structured content for full-stack development learning.",
      tech: "HTML, CSS, JavaScript, React",
      github: "https://github.com/Prapul-66/Fullstack-Mastery",
    },
    {
      title: "News App",
      icon: "📰",
      description:
        "A clean news application built using React.js, fetching live news using an API with category filtering.",
      tech: "HTML, CSS, JavaScript, React",
      github: "https://github.com/Prapul-66/News-App",
    },
    {
      title: "Restaurant App",
      icon: "🍽️",
      description:
        "A MERN stack restaurant website with a modern UI, reservation form, and team showcase. Mainly focuses on frontend with design and layout.",
      tech: "HTML, CSS, JavaScript, React",
      github: "https://github.com/Prapul-66/Restaurant-App",
    },
    {
      title: "DishDrive",
      icon: "🚗",
      description:
        "A full-stack food delivery platform inspired by Swiggy, built using the MERN stack. DishDrive allows vendors to register, manage their accounts securely using JWT authentication and password hashing, and enables seamless backend handling of restaurant and order-related data. Frontend under development with a focus on responsive user experience and real-time order interaction.",
      tech: "HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB",
      github: "https://github.com/Prapul-66/Backend",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects__container">
        {projects.map((project, index) => (
          <div className="project__card" key={index}>
            <div className="project__icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project__tech">
              {project.tech.split(',').map((tech, i) => {
                const trimmedTech = tech.trim();
                const icon = techIcons[trimmedTech];
                return (
                  <span className="tech__chip" key={i}>
                    {icon && <img src={icon} alt={trimmedTech} />}
                    {trimmedTech}
                  </span>
                );
              })}
            </div>
            <div className="project__links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
