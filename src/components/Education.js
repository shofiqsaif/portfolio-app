import React from "react";
import "./Education.css";

// Sample data - Replace with your actual education
const educationList = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "United International University, Dhaka",
    // years: '2016 – 2020',
    years: "2020",
    details: "CGPA: 3.51 / 4.00",
  },
  // ,
  // {
  //   id: 2,
  //   degree: 'Higher Secondary School Certificate',
  //   institution: 'KAFCO School and College, Chittagong',
  //   years: '2015',
  //   details: 'GPA: 4.29 / 5.00'
  // },
  // {
  //   id: 3,
  //   degree: 'Secondary School Certificate',
  //   institution: 'KAFCO School and College, Chittagong',
  //   years: '2013',
  //   details: 'GPA: 5.00 / 5.00'
  // }
];

function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationList.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3>{edu.degree}</h3>
            <h4>
              {edu.institution} | {edu.years}
            </h4>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
