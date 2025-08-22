import React from 'react';
import './Skill.css';

import HTML from '../images/HTML.png';
import CSS from '../images/CSS.png';
import js from '../images/js.png';
import react from '../images/reactjs.png';
import nodejs from '../images/Nodejs.png';
import express from '../images/expressjs.png';
import python from '../images/python.png';
import mongodb from '../images/mongodb.png';
import SQL from '../images/SQL.png';
import git from '../images/git.png';

const skills = [
  { name: 'HTML', img: HTML },
  { name: 'CSS', img: CSS},
  { name: 'JavaScript', img: js },
  { name: 'React.js', img: react },
  { name: 'Node.js', img: nodejs },
  { name: 'Express.js', img: express },
  { name: 'MongoDB', img: mongodb },
  { name: 'SQL', img: SQL },
  { name: 'Python', img: python },
  { name: 'Git', img: git },
];

const Skill = () => {
  return (
    <section className="skill-section" id="skills">
      <div className="container">
        <h2 className="skill-title">My Skills</h2>
        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.img} alt={skill.name} className="skill-img" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
