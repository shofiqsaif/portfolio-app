import React from "react";
import "./Projects.css";

// Project data
const projects = [
  {
    id: 1,
    title: "THE THIRD EYE — Thesis Project",
    description:
      "Developed a video-based action recognition system to assist dementia patients by alerting them if they forget to perform critical tasks.",
    technologies: ["TensorFlow", "Python"],
    year: "2020",
    link: "#", // Add link if available
  },
  {
    id: 2,
    title: "ZERO FOOD WASTE — DBMS Project",
    description:
      "Created a web platform allowing restaurants to sell excess food at discounted rates.",
    technologies: ["Bootstrap", "PHP"],
    year: "2018",
    link: "#", // Add link if available
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Course Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>
              {project.title}{" "}
              <span className="project-year">({project.year})</span>
            </h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
