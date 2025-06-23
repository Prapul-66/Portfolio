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
        "A MERN stack restaurant application with a modern UI, reservation form, and team showcase. Includes both frontend and backend features.",
      tech: "MongoDB, Express.js, React.js, Node.js",
      github: "https://github.com/Prapul-66/Restaurant-App",
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
