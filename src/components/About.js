import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleAboutSection = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Button below Hero Section */}
      <div className="about-toggle-container">
        <button className="about-toggle-btn" onClick={toggleAboutSection}>
          About Me
        </button>
      </div>

      {/* Sliding About Section */}
      <section className={`about-section ${isVisible ? "visible" : ""}`} id="about">
        <div className="about-container">
          <div className="about-content">
            <h1>About Me</h1>
            <p>
              Hi, I'm <span className="highlight">Suraj Kumar</span>, a passionate Full-Stack Web Developer and problem solver. 
              I specialize in creating user-friendly, responsive web applications with a focus on clean code and functionality.
            </p>
            <p>
              I am currently a second-year student at JUET, India, honing my skills in web development, 
              data structures, and algorithms. I love exploring new technologies and applying them in real-world projects.
            </p>
            <p>
              Beyond coding, I am an active member of <span className="highlight">BOTNET</span>, 
              contributing to cybersecurity, multimedia, and UI/UX projects. My journey is driven by a passion for learning, 
              creativity, and solving complex challenges.
            </p>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
