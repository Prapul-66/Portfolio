import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Fullstack Mastery",
      description:
        "A frontend-only learning platform built with React and plain JavaScript. Includes multiple pages using React Router and structured content for full-stack development learning.",
      tech: "React, React Router, JavaScript, CSS",
      github: "https://github.com/Prapul-66/Fullstack-Mastery",
    },
    {
      title: "News App",
      description:
        "A clean news application built using React.js, fetching live news using an API with category filtering.",
      tech: "React.js, News API",
      github: "https://github.com/Prapul-66/News-App",
    },
    {
      title: "Restaurant App",
      description:
        "A MERN stack restaurant website with a modern UI, reservation form, and team showcase. Mainly focuses on frontend with design and layout.",
      tech: "React.js, CSS",
      github: "https://github.com/Prapul-66/Restaurant-App",
    },
    {
      title: "DishDrive",
      description:
        "A full-stack food delivery platform inspired by Swiggy, built using the MERN stack. DishDrive allows vendors to register, manage their accounts securely using JWT authentication and password hashing, and enables seamless backend handling of restaurant and order-related data. Frontend under development with a focus on responsive user experience and real-time order interaction.",
      tech: "MongoDB, Express.js, React.js, Node.js (MERN Stack)",
      github: "https://github.com/Prapul-66/Backend",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects__container">
        {projects.map((project, index) => (
          <div className="project__card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech}</p>
            <div className="project__links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
