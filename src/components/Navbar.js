import React from 'react';
import './Navbar.css';
import Scroll from 'react-scroll';

const { Link } = Scroll;

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="home"
            spy
            smooth
            duration={500}
            className="nav-items"
          >
            Home
          </Link>
          <Link
            to="about"
            spy
            smooth
            duration={500}
            className="nav-items"
          >
            About
          </Link>
          <Link
            to="work"
            spy
            smooth
            duration={500}
            className="nav-items"
          >
            Work
          </Link>
          <Link
            to="education"
            spy
            smooth
            duration={500}
            className="nav-items"
          >
            Education
          </Link>
          <Link
            to="projects"
            spy
            smooth
            duration={500}
            className="nav-items"
          >
            Projects
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
