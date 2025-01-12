import React, { useState } from "react";
import "./Project.css";

const projectData = [
  {
    id: 1,
    name: "Holisticare",
    image: "holisticare.png",
    links: [
      { name: "Holistcare", url: "https://sahityajiya.github.io/vultr_hackathon/" },
      { name: "GitHub", url: "https://github.com/sahityajiya/vultr_hackathon" },
    ],
    description:
      "A health and wellness website focusing on fitness, mental health, and overall well-being. It includes features like health tracking, meditation reminders, and child development resources.",
  },
  {
    id: 2,
    name: "CSRF(CTF Challenge)",
    image: "imagectf.png",
    links: [
      { name: "CTF Mechaine", url: "https://ctftachyon-24.vercel.app/" },
      { name: "GitHub", url: "https://github.com/example/csrf-ctf" },
    ],
    description:
      "An educational project designed to teach CSRF vulnerabilities through interactive CTF challenges.",
  },
  {
    id: 3,
    name: "Portfolio Website",
    image: "imageportfolio.png",
    links: [
      { name: "portfolio", url: "https://t-suraj21.github.io/profile/" },
      { name: "GitHub", url: "https://github.com/example/portfolio" },
    ],
    description:
      "A personal portfolio showcasing my skills, projects, and contact information. Built with React.js.",
  },
  {
    id: 4,
    name: "UI/UX DESIGN",
    image: "imageUIUX.png",
    links: [
      { name: "Figma Design", url: "https://drive.google.com/drive/folders/1rkfgUoprmnKiZWN4UrRrmTtXC5vflS3E?usp=drive_link" },
    ],
    description:
      "A personal UI/UX DESIGN showcasing my skills.",
  },
  {
    id: 5,
    name: "Hackathon Projects",
    image: "project.png",
    links: [
      { name: "Hacksprint", url: "https://thehacker-suraj.vercel.app/" },
      { name: "Vultr(gfg)", url: "https://sahityajiya.github.io/vultr_hackathon/" },
      { name:"BotnetWeb-page", url: "https://t-suraj21.github.io/bOtNeT_WeBpg/"}
    ],
    description:
      "A project made during some hackathon challenge.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-hover">
              <span>{project.name}</span>
            </div>
          </div>
        ))}
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
            {selectedProject.links && (
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
            )}
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
