import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h1 className="about-title">
            About <span className="arrow">↘</span>
          </h1>
          <p className="about-description">
          Hi, I’m Suraj Kumar, a second-year student at JUET, India, passionate about full-stack web development and competitive programming. With proficiency in HTML, CSS, JavaScript, React.js, and a growing expertise in backend technologies, I create user-friendly, dynamic web applications. Actively involved in BOTNET and UI/UX design, I enjoy crafting intuitive interfaces and exploring cybersecurity challenges. Beyond coding, I design projects on Figma and lead initiatives that foster learning. I strive to combine creativity and technology to deliver impactful solutions.
          </p>
        </div>
        <div className="design-services">
          {["WEBSITE DESIGN", "FIGMA DESIGN", "DASHBOARD DESIGN"].map((service) => (
            <div key={service} className="service-item">
              {service}
              <span className="arrow">→</span>
            </div>
          ))}
        </div>
        <div className="agency-logo">
          <div className="circle-logo">S</div>
          <p className="agency-name">( SURAJ CREATION )</p>
        </div>
      </section>

      {/* Work Section */}
      <section className="work-section">
        <h1 className="work-title">
          Work <span className="arrow">↘</span>
        </h1>
        <p className="work-description">
        I have hands-on experience in full-stack web development, specializing in React.js and backend technologies. As an active member of BOTNET, I’ve contributed to organizing cybersecurity events and UI/UX projects. Proficient in Figma for design and adept at creating interactive web solutions, I strive to deliver seamless user experiences.
        </p>
      </section>

      {/* Footer */}
      {/* <footer className="about-footer">© 2023-PRESENT</footer> */}
    </div>
  );
}
