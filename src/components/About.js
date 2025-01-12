import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h1 className="about-heading">About Me</h1>
        <p className="about-content">
          I’m <span className="highlight">Suraj Kumar</span>, a <span className="highlight">Full-Stack Developer</span> pursuing my second year at <span className="highlight">JUET, India</span>. I specialize in creating <span className="highlight">responsive</span> and <span className="highlight">user-friendly</span> web applications.
        </p>
        <p className="about-content">
          Skilled in <span className="highlight">React.js</span>, <span className="highlight">JavaScript</span>, and exploring <span className="highlight">backend technologies</span>, I’m passionate about coding, problem-solving, and leveraging technology for impactful solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
