import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">SURAJ <span>BUILT.</span></h2>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
          <div className="footer-contact">
            <p>📞 (+91)8252490197</p>
            <p>📧 surajyadav2121115@gmail.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Inquire</h3>
          <form className="footer-form">
            <div className="form-group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Let us know how we can help..."></textarea>
            <button type="submit" className="footer-submit">SUBMIT →</button>
          </form>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2024. Suraj Kumar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
