import React, { useState } from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import "./App.css";

const App = () => {
  const [showContact, setShowContact] = useState(false);

  const handleToggleContact = () => {
    setShowContact((prevState) => !prevState);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skill Section */}
      <Skill />

      {/* Contact Toggle Link */}
      <header className="App-header">
        <a
          href="#contact"
          onClick={handleToggleContact}
          className="contact-link"
        >
          Contact Me
        </a>
      </header>

      {/* Slide-Down Contact Section */}
      <div
        className={`contact-slide ${
          showContact ? "contact-slide-visible" : "contact-slide-hidden"
        }`}
      >
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
