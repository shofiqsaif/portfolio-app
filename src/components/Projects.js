import React from 'react';
import './Projects.css';

// Project data
const projects = [
  {
    id: 1,
    title: 'THE THIRD EYE — Thesis Project',
    description: 'Developed a video-based action recognition system to assist dementia patients by alerting them if they forget to perform critical tasks.',
    technologies: ['TensorFlow', 'Python'],
    year: '2020',
    link: '#' // Add link if available
  },
  {
    id: 2,
    title: 'ZERO FOOD WASTE — DBMS Project',
    description: 'Created a web platform allowing restaurants to sell excess food at discounted rates.',
    technologies: ['Bootstrap', 'PHP'],
    year: '2018',
    link: '#' // Add link if available
  }
];

// Achievements data
const achievements = [
  'Runner-Up – Intra-University AI Contest (Q4 2019) as ParzenWindow',
  '84th / 187 – ICPC Asia Dhaka Regional Contest 2019 as UIU One Last Time',
  '39th / 161 – SUST IUPC 2019 as UIU BrainFreeze',
  '61st / 93 – IUT 10th ICT Fest Programming Contest 2019 as UIU Mortuus',
  'Champion (Senior) – UIU Intra University Programming Contest 2018',
  'Champion (Junior) – UIU CSE Fest 2017 Intra UIU Programming Contest',
  'Participated in numerous national contests representing UIU'
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Course Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title} <span className="project-year">({project.year})</span></h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            )}
          </div>
        ))}
      </div>

      <div className="achievements-section">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects; 