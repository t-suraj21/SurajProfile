import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-title">Let's Connect!</h2>
          <p className="footer-text">
            Feel free to reach out to me on any of these platforms.
          </p>
          <ul className="social-links">
            <li>
              <a
                href="https://www.linkedin.com/in/suraj-kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link neon-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/t-suraj21"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link neon-link"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/surajkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link neon-link"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/t_suraj21/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link neon-link"
              >
                <i className="fab fa-instagram"></i> {/* Updated icon */}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="footer-credit">
            © {new Date().getFullYear()} Suraj Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
