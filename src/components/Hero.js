import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome, To the Dev Life  of <span className="highlight">Suraj</span>
          </h1>
          <p className="hero-description">
            A passionate Full-Stack Web Developer and problem solver, dedicated
            to crafting elegant and responsive web solutions that enhance user
            experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">
              Explore Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
