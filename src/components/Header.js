import React from "react";
import "./Header.css"; // We'll create this CSS file next

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="#about" className="logo-link">
          <span
            className="logo-text"
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}
          >
            Shofiq
          </span>
        </a>
      </div>
      <div className="nav-wrapper">
        <nav>
          <ul>
            {/* <li>
              <a href="#about">About</a>
            </li> */}
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            {/* <li>
              <a href="#achievements">Achievements</a>
            </li> */}
            <li>
              <a href="#skills">Skills</a>
            </li>

            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
