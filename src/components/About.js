import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h1>SHOFIQUL ISLAM</h1>
      <p className="tagline">
        Software Developer | CSE Graduate | Tech-Enthusiast
      </p>
      <div className="contact-info">
        <span> 📞 +880 1766078169</span> |<span>✉️ sislam161079@gmail.com</span>
      </div>
      <div className="social-links">
        <a
          href="https://github.com/shofiqsaif"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |
        <a
          href="https://linkedin.com/in/sislam079"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://codeforces.com/profile/Shofiq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codeforces
        </a>
        |
        <a
          href="cv.pdf"
          download="cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>
      {/* <p className="intro-text">
        A passionate Computer Science and Engineering graduate with experience in software development, particularly with Python and web technologies. Eager to contribute to innovative projects and continuously learn new skills. Strong background in competitive programming and problem-solving.
      </p> */}
      {/* You can add a profile picture here if desired */}
    </section>
  );
}

export default About;
