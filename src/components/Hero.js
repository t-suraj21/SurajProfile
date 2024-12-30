import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ArrowUpRight, Sparkles } from "lucide-react";
import RatingBadge from "./rating-badages";
import "./Hero.css"; // Optional CSS for styling

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Removed NavBar */}

        <div className="hero-grid">
          {/* Left Section */}
          <div className="hero-text">
            <div className="relative">
              <h1 className="hero-title">
                Building
                <br />
                Digital Experiences
                <br />
                <span className="highlight">with Purpose</span>
                <br />
              </h1>
            </div>

            <div className="hero-details">
              <p className="hero-description">Explore My Journey in Design and Development</p>
              <RatingBadge />
            </div>
          </div>

          {/* Right Section */}
          <div className="hero-image-container">
            <div className="relative">
              <img src="/heroimg.png" alt="Professional portrait" className="hero-image" />
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="cta-box">
          <div className="cta-header">
            <ArrowUpRight className="cta-icon" />
            <p className="cta-text">
              A modern agency with new solutions for creating websites.
            </p>
          </div>
          <Link to="/contact" className="cta-button">
            <Sparkles className="cta-sparkle" />
            <span>Contact Me!</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll to</span>
          <span>explore</span>
          <div className="scroll-circle">
            <div className="scroll-dot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
