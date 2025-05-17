import React from "react";
import "./Skills.css";

// Sample data - Replace with your actual skills
const skills = {
  Programming: ["Python", "JavaScript", "Java", "C++", "C"],
  Web: ["HTML", "CSS", "Bootstrap", "MongoDB", "Express", "React", "Node.js"],
  Tools: ["Git", "Jira"],
};

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="skill-category"
            style={{ marginBottom: "8px" }}
          >
            <span style={{ fontWeight: "bold" }}>{category}:</span>{" "}
            {skillList.join(", ")}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
