import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    attachment: null,
    privacyAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me! —</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Name and Email */}
        <div className="form-row">
          <div className="form-group">
            <label>Your name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Your e-mail *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Attachments */}
        <div className="form-group">
          <label>Your attachments</label>
          <p className="attachment-description">
            We work in accordance with the latest standards. Please upload
            documents needed to verify your application or answer your question.
          </p>
          <div className="upload-box">
            <input
              type="file"
              name="attachment"
              id="file-upload"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload">
              <span>📤 Click here to upload attachment</span>
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Your message *</label>
          <textarea
            name="message"
            placeholder="Your message description"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Privacy Policy */}
        <div className="form-group">
          <label className="checkbox-container">
            <input
              type="checkbox"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleInputChange}
              required
            />
            I accept processing to take place in accordance with notice and the{" "}
            <a href="/privacy-policy" className="privacy-link">
              privacy policy
            </a>.
          </label>
        </div>

        {/* Submit */}
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
