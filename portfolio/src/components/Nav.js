import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <div id="home">
        <nav className="full" id="full">
          <a href="#home" className="home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#projects" className="work">
            Projects
          </a>
          <div className="welcome">
            <p>
              Hi, my name is Kasa. <br></br>
              I`m a web developer <br></br>
              in Berlin.
            </p>
          </div>
          <div className="iconsnav">
            <a href="#about">
              <i className="fas fa-arrow-circle-down arrow"></i>
            </a>
            <a href="https://codepen.io/Pudel/" target="blank">
              <i className="fab fa-codepen"></i>
            </a>
            <a href="https://de.linkedin.com/" target="blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/pudelgulasch" target="blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </nav>
        <nav className="responsive">
          <li>
            <a href="#home">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="fas fa-book-reader"></i>
            </a>
          </li>
          <li>
            <a href="#projects">
              <i className="fas fa-keyboard"></i>
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fas fa-id-card"></i>
            </a>
          </li>
        </nav>
      </div>
    );
  }
}

export default Nav;
