import React, { useState } from "react";
import "./Project.css";

const projectData = [
  {
    id: 1,
    name: "Holisticare",
    image: "Holisticare.png",
    links: [
      { name: "Live Demo", url: "https://sahityajiya.github.io/vultr_hackathon/" },
      { name: "GitHub", url: "https://github.com/sahityajiya/vultr_hackathon" },
    ],
    // description:
    //   "A health and wellness website focusing on fitness, mental health, and overall well-being. Features include health tracking, meditation reminders, and child development resources.",
  },
  {
    id: 2,
    name: " CTF ",
    image: "CTF.png",
    links: [
      { name: "Live Demo", url: "https://example.com/csrf-ctf" },
      { name: "GitHub", url: "https://github.com/example/csrf-ctf" },
    ],
    // description:
    //   "An educational project designed to teach CSRF vulnerabilities through interactive CTF challenges.",
  },
  {
    id: 3,
    name: "Portfolio Website",
    image: "Portfolio.png",
    links: [
      { name: "Live Site", url: "https://example.com/portfolio" },
      { name: "GitHub", url: "https://github.com/example/portfolio" },
    ],
    // description:
    //   "A personal portfolio showcasing my skills, projects, and contact information. Built with React.js.",
  },
  {
    id: 4,
    name: "UI/UX Design",
    image: "UIUX.png",
    links: [
      { name: "Figma Design", url: "https://example.com/uiux-figma" },
      { name: "Prototype", url: "https://example.com/uiux-prototype" },
    ],
    // description:
    //   "A personal UI/UX project showcasing design skills with Figma and interactive prototypes.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <h1 className="section-title">Projects</h1>
      <div className="slider-container">
        <div className="slider">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-overlay">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.name}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="modal-image"
            />
            <p>{selectedProject.description}</p>
            <div className="project-links">
              {selectedProject.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
