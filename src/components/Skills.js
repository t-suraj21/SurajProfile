import React from "react";
import "./Skills.css";

const SkillList = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "UI/UX Design",
    "Figma",
    "Git/GitHub",
    "C Programming",
    "DSA",
    "REST APIs",
    "Cybersecurity",
    "Tailwind CSS",
  ];

  return (
    <div className="skill-list-container">
      <div className="shadow-left"></div>
      <div className="marquee">
        <div className="marquee-content">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
        {/* Repeat marquee content for smooth infinite scrolling */}
        <div className="marquee-content">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="shadow-right"></div>
    </div>
  );
};

export default SkillList;
