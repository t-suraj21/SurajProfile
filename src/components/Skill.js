import React from "react";
import "./Skill.css";

const Skill = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Figma",
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Figma",
    "C++",
  ];

  return (
    <div className="skills-container">
      <div className="marquee">
        <div className="marquee-content">
          {skills.map((skill, index) => (
            <span key={index} className="skill-item">
              {skill}
            </span>
          ))}
          {/* Duplicate skills for smooth infinite scrolling */}
          {skills.map((skill, index) => (
            <span key={index + skills.length} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
