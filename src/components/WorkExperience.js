import React from 'react';
import './WorkExperience.css';

// Sample data - Replace with your actual experience
const experiences = [
  {
    id: 1,
    title: 'Software Developer Intern',
    company: 'Brainstation 23',
    years: 'March 2022 – June 2022',
    description: 'Worked with Odoo ERP framework, utilizing Python and XML for module customization and development.'
  },
  // {
  //   id: 2,
  //   title: 'Junior Developer',
  //   company: 'Startup Hub',
  //   years: '2020 - 2022',
  //   description: 'Assisted senior developers in building features for a SaaS product. Gained experience in Agile methodologies...'
  // }
];

function WorkExperience() {
  return (
    <section id="experience" className="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-item">
            <h3>{exp.title}</h3>
            <h4>{exp.company} | {exp.years}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience; 