import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Suraj Kumar</span>
          </h1>
          <p>
            I'm a passionate Full-Stack Web Developer and problem solver, specializing in creating
            user-friendly, responsive web applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
