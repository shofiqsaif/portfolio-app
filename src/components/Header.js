import React from "react";
import "./Header.css"; // We'll create this CSS file next

function Header() {
  return (
    <header className="header">
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
    </header>
  );
}

export default Header;
