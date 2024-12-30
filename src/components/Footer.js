import React from "react";
import "./Footer.css"; // Custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Footer Content */}
      <div className="footer-content">
        {/* About Me */}
        {/* <div className="footer-about">
          <h3>About Me</h3>
          <p>
            Hi, I'm Suraj Kumar, a passionate web developer and designer. I love creating
            intuitive user experiences and exploring new technologies to solve real-world problems.
          </p>
        </div> */}

        {/* Social Links */}
        <div className="footer-social">
          <h3>Follow Me</h3>
          <ul className="social-links">
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Me</h3>
          <p>Email: surajkumar@example.com</p>
          <p>Phone: +91 12345-67890</p>
          <p>Location: India</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 Suraj Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
