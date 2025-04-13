import React from 'react';
import './Skills.css';

// Sample data - Replace with your actual skills
const skills = {
  Programming: ['Python', 'JavaScript', 'Java', 'C++', 'C'],
  Web: ['HTML', 'CSS', 'Bootstrap', 'MongoDB', 'Express', 'React', 'Node.js'],
  Tools: ['Git', 'Jira']
};

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <ul>
              {skillList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 